export type PostLoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  };
  message?: string;
  errors?: string[];
};

export type PostLoginRequest = {
  email: string;
  password: string;
  rememberMe?: boolean; // Optional, defaults to false
};

export type PostLoginError = {
  message: string;
  errors?: string[];
};
