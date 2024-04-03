import { z } from "zod";
// import { CreateUserModel } from "../models/user.model";
import { LoginSchema, RegisterSchema } from "@/schema";

type dataRegisterResponse = {
  message: string;
  statusCode: string;
};
export async function LoginUser(
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string | null
) {
  try {
    const result = await fetch("http://localhost:8001/api/auth/signIn", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const resultServer = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await result.json();
    console.log("data", data);
    if (!result.ok) {
      throw new Error("Failed to login user Server returned " + result.status);
    }
    return { success: data.message };
  } catch (error) {
    return { error: "Something went wrong" };
  }
}

export async function CreateUser(values: z.infer<typeof RegisterSchema>) {
  console.log("values", values);
  try {
    const result = await fetch("http://localhost:8001/api/user/signUp", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await result.json();
    console.log("data", data);
    if (!result.ok) {
      throw new Error(
        "Failed to create user. Server returned " + result.status
      );
    }
    return { success: data.message };
  } catch (error) {
    return { error: "Something went wrong" };
  }
}
