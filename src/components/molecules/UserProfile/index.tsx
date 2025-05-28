import React from "react";
import { GetUserInfoResponse } from "@/services/apis/user/getUserInfo/types";

const UserProfile = async (userInfo: GetUserInfoResponse) => {
  return <div>{JSON.stringify(userInfo)}</div>;
};

export default UserProfile;
