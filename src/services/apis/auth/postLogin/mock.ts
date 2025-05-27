import { http, HttpResponse } from "msw";
import { path } from "./fetcher";
import { postErrorFixture, postFixture } from "./fixture";
import { PostLoginError, PostLoginRequest, PostLoginResponse } from "./types";

export const postLoginMockHandlers = [
  http.post<any, PostLoginRequest, PostLoginResponse | PostLoginError>(`${path}`, async ({ request }) => {
    const requestBody = await request.json();
    if (requestBody.email === "error401@gmail.com") {
      return HttpResponse.json(postErrorFixture("Unauthorized"), { status: 401 });
    }
    return HttpResponse.json(postFixture(requestBody), { status: 200 });
  }),
];
