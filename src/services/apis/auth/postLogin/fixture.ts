import { PostLoginError, PostLoginRequest, PostLoginResponse } from "./types";

const postFixture = (request: PostLoginRequest): PostLoginResponse => {
  return {
    accessToken: "mockedAccessToken",
    refreshToken: "mockedRefreshToken",
    user: {
      id: "mockedUserId",
      email: request.email,
      name: "Mocked User",
      role: request.email === "admin@gmail.com" ? "admin" : "user",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  };
};

const postErrorFixture = (message: string): PostLoginError => {
  return {
    message,
    errors: [message],
  };
};

export { postFixture, postErrorFixture };
