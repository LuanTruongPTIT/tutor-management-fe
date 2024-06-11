"use client";
import React, { useContext, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import CardWrapper from "./card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoginSchema } from "@/schema";
import { BeatLoader } from "react-spinners";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../forrm-error";
import { FormSuccess } from "../form-success";
import { useMutation } from "@tanstack/react-query";
import { LoginUser, SetToken } from "@/modules/user/user.service";
import { useRouter, useSearchParams } from "next/navigation";

import { setProfileLS } from "@/lib/utils/auth.utils";
import { useUser } from "@/context/app.context";

const initialFormState = {
  email: "",
  password: "",
};
function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const { setProfile } = useUser();
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // const { mutate, error } = useMutation({
  //   mutationFn: (body: CreateUserModel) => {
  //     console.log(body)
  //     return CreateUser(body);
  //   },
  // });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      setError("");
      setSuccess("");
      setLoading(true);
    });

    try {
      const data = await LoginUser(values);

      startTransition(async () => {
        console.log("data", data.user);
        if (data.status === 400) {
          setError(data.message);
          setLoading(false);
          return;
        }
        // setIsAuthenticated(true);
        setProfile(data.user);
        setError("");
        setSuccess("Login success");
        setLoading(false);
        await SetToken(data);
        router.push("/landing-page");
      });
    } catch (error) {
      startTransition(() => {
        setError("Login failed");
        setSuccess("");
        setLoading(false);
      });
    }
  };
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="luan@gmail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="*******" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full">
            {loading ? <BeatLoader color="#F5F5F5" /> : "Login"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}

export default LoginForm;
