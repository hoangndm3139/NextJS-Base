import { Locale } from "@/config/i18n-config";
import { ParsedUrlQuery } from "querystring";
import qs from "qs";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL!;

export const query = (query?: ParsedUrlQuery): string => {
  return `${query && Object.keys(query).length ? `?${qs.stringify(query, { arrayFormat: "repeat" })}` : ""}`;
};

export const fetchWrapper: <T>(
  url: string,
  options: RequestInit & {
    // A flag to indicate this is a retry request
    _retryRequest?: boolean;
    // A flag to indicate this is request that return a blob
    isResponseBlob?: boolean;
    // A flag to indicate the language of the request
    language?: Locale;
  },
) => Promise<T> = async (url, options = {}) => {
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };
  const response = await fetch(baseURL + url, { ...options, headers });

  if (response.ok) {
    return await (options.isResponseBlob ? response.blob() : response.json());
  }
  const errorData = await response.json();

  if (options._retryRequest) {
    window.location.replace("/login");
    throw [errorData.message || "Session expired"];
  }

  if (response.status !== 401) {
    throw [errorData.message || "An error occurred", errorData.errors || []];
  }

  const refreshResponse = await fetch(baseURL + "/auth/refresh-token", {
    method: "POST",
  });

  if (!refreshResponse.ok) {
    window.location.replace("/login");
    throw [errorData.message || "Session expired"];
  }

  // Retry the request with the new token
  return await fetchWrapper(url, {
    ...options,
    headers: {
      ...headers,
    },
    _retryRequest: true,
  });
};
