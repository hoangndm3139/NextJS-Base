import { GetUserInfoResponse } from "./types";

const getFixture = (userId: string): GetUserInfoResponse => {
  return {
    id: userId,
    email: "mockuser@gmail.com",
    firstName: "Mock",
    lastName: "User",
    displayName: "Mock User",
    phoneNumber: "123-456-7890",
    avatar: "https://example.com/avatar.jpg",
    role: "user",
    createdAt: new Date("2023-01-01T00:00:00Z"),
    updatedAt: new Date("2023-01-02T00:00:00Z"),
    isActive: true,
    lastLoginAt: new Date("2023-01-02T12:00:00Z"),
  };
};

export { getFixture };
