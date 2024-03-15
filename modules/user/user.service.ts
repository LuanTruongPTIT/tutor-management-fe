import { z } from "zod";
// import { CreateUserModel } from "../models/user.model";
import { LoginSchema } from "@/schema";
export async function CreateUser(values: z.infer<typeof LoginSchema>) {
  // const result = await fetch(`/api/sign-up`, {
  //   method: "POST",
  //   body: JSON.stringify(values),
  //   headers: { "Content-type": "application/json; charset=UTF-8" },
  // });
  // console.log("result", result);
  // if (!result) {
  //   return { error: "Something wrong" };
  // }
  // return { success: "create user is success" };
  try {
    const result = await fetch(`/api/sign-up`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    if (!result.ok) {
      // Xử lý trường hợp fetch trả về lỗi
      throw new Error(
        "Failed to create user. Server returned " + result.status
      );
    }

    // Nếu mọi thứ thành công, trả về dữ liệu thành công
    return { success: "create user is success" };
  } catch (error) {
    // Xử lý lỗi nếu fetch gặp vấn đề
    // console.error("Failed to create user:", error.message);
    return { error: "Something went wrong" };
  }
}
