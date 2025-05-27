import { postLoginMockHandlers } from "@/services/apis/auth/postLogin/mock";
import { getUserInfoMockHandlers } from "@/services/apis/user/getUserInfo/mock";

export const handlers = [...postLoginMockHandlers, ...getUserInfoMockHandlers];
