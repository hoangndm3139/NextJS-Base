import { fetchWrapper } from "../../fetchWrapper";
import { PostLoginRequest, PostLoginResponse } from "./types";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const endpoint = "/auth/login";
export const path = `${API_URL}${endpoint}`;

export const postLoginFetcher = async (requestBody: PostLoginRequest): Promise<PostLoginResponse> => {
  const response = await fetchWrapper<PostLoginResponse>(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
  return response;
};
