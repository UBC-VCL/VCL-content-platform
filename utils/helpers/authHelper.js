import User from "../models/user.model.js";
import Member from "../models/member.model.js";
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";
import { USER_TYPES, USER_TYPE_NAMES } from "./types.js";

// Checks if access token is valid
// returns obj: {
//    userPermissions: "member" | "admin",
//    isValidToken: boolean
// }
const checkAccessToken = async (access_token) => {
  let userPermissions = null;
  let isValidToken = false;

  const user = await User.findOne({ access_token });

  if (user) {
    userPermissions = user.permissions;
    isValidToken = true;
  }

  return {
    userPermissions,
    isValidToken,
  };
};

export const hasMemberPermissions = async (accessToken) => {
  const token = await checkAccessToken(accessToken);
  return token.isValidToken && USER_TYPE_NAMES.includes(token.userPermissions);
};

export const hasAdminPermissions = async (accessToken) => {
  const token = await checkAccessToken(accessToken);
  return token.isValidToken && token.userPermissions === USER_TYPES.ADMIN;
};

export const sendCreateUser = async (user) => {
  // Generate 21 length tokens
  const access_token = nanoid();
  const refresh_token = nanoid();

  // Generate salted hash for password
  const hash = await bcrypt.hash(user.password, 10);

  // Create user document
  const newUser = new User({
    username: user.username,
    permissions: user.permissions,
    member: user.member,
    refresh_token,
    access_token,
    hash,
  });
  const data = await newUser.save();

  return data;
}