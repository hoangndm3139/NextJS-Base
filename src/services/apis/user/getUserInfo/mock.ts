import { http, HttpResponse } from "msw";
import { path } from "./fetcher";
import { getFixture } from "./fixture";
import { GetUserInfoResponse } from "./types";

export const getUserInfoMockHandlers = [
  http.get<any, any, GetUserInfoResponse | { message: string }>(`${path}`, async ({ request }) => {
    const url = new URL(request.url);
    const userId = url.searchParams.get("userId");
    if (!userId) {
      return HttpResponse.json({ message: "UserId is not found" }, { status: 500 });
    }
    return HttpResponse.json(getFixture(userId), { status: 200 });
  }),
];
