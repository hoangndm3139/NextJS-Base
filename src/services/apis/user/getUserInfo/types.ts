export type GetUserInfoResponse = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  phoneNumber?: string;
  avatar?: string;
  role: "admin" | "user" | "guest";
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  lastLoginAt?: Date;
  preferences?: {
    theme: "light" | "dark";
    language: string;
    notifications: boolean;
  };
};

export type QueryParams = {
  userId?: string; // Optional, if not provided, fetches the current user's info
};
