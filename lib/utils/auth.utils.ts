"use server";
import { User } from "@/types/user.type";
import { cookies } from "next/headers";
const cookieStore = cookies();
export const getAccessToken = () => {
  return cookieStore.get("accesstoken");
};
export const getProfile = (): User | null => {
  const result = localStorage.getItem("profile");
  return result ? JSON.parse(result) : null;
};
export const setProfileLS = (profile: User) => {
  localStorage.setItem("profile", JSON.stringify(profile));
};
export const deleteProfileLS = () => {
  localStorage.removeItem("profile");
};
