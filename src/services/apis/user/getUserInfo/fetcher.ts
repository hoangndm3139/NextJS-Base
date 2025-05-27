import { fetchWrapper, query } from "../../fetchWrapper";
import { GetUserInfoResponse, QueryParams } from "./types";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const endpoint = "/user/profile";
export const path = `${API_URL}${endpoint}`;

export const getUserInfoFetcher = async (queryParams: QueryParams): Promise<GetUserInfoResponse> => {
  const url = `${endpoint}${query(queryParams)}`;
  const response = await fetchWrapper<GetUserInfoResponse>(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
