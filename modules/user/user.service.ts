import { z } from "zod";
// import { CreateUserModel } from "../models/user.model";
import { LoginSchema, RegisterSchema } from "@/schema";
import { toast } from "sonner";

type dataRegisterResponse = {
  message: string;
  statusCode: string;
};
export async function LoginUser(values: z.infer<typeof LoginSchema>) {
  const result = await fetch("http://localhost:8001/api/auth/signIn", {
    method: "POST",
    body: JSON.stringify(values),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });

  const data = await result.json();

  return data;
}

export async function CreateUser(values: z.infer<typeof RegisterSchema>) {
  const result = await fetch("http://localhost:8001/api/user/signUp", {
    method: "POST",
    body: JSON.stringify(values),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
  const data = await result.json();
  console.log("data", data);
  if (!result.ok) {
    throw new Error("Failed to create user. Server returned " + result.status);
  }
  return { success: "Confirm email send" };
}
export async function SetToken(data: any) {
  const result = await fetch("http://localhost:3000/api/auth", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
  return result;
}

export async function RegisterTutor(values: any) {
  const result = await fetch("http://localhost:8001/api/tutor/register-tutor", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: localStorage.getItem("accesstoken") ?? "",
    },
  });
  const data = await result.json();
  console.log("data", data);
  if (!result.ok) {
    throw new Error("Something wrong");
  }
}
