"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AboutTutorSchema, LoginSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import NavButtons from "../NavButton";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setCurrentSteps } from "@/redux/slices/onboardingTutorSlice";

export default function AboutForm() {
  const currentStep = useAppSelector((store) => store.onboarding.currentStep);
  const form = useForm<z.infer<typeof AboutTutorSchema>>({
    resolver: zodResolver(AboutTutorSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });
  const dispatch = useAppDispatch();
  async function processData(data: z.infer<typeof AboutTutorSchema>) {
    console.log("data", data);
    dispatch(setCurrentSteps(currentStep + 1));
  }
  return (
    <Form {...form}>
      <div className="w-[400px] flex items-center justify-center py-[10px]">
        <h3 className="text-[#121117] mr-[50px] font-bold text-[32px]">
          About
        </h3>
      </div>
      <div className="ml-[130px] w-[400px] text-[16px] leading-6 flex items-center justify-center pb-[24px]">
        <p>
          Start creating your public tutor profile. Your progress will be
          automatically saved as you complete each section. You can return at
          any time to finish your registration.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <form
          onSubmit={form.handleSubmit(processData)}
          className="space-y-6  w-[400px] flex flex-col ml-3"
        >
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
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FirstName</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Truong" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LastName</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Luan" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="0335219807" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* <FormError message={error} />
        <FormSuccess message={success} /> */}
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I confirm I’m over 18
            </label>
          </div>
          <NavButtons />
        </form>
      </div>
    </Form>
  );
}
