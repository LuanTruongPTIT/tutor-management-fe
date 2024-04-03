// export default function ProfileDescription() {

// }
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import NavButtons from "../NavButton";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  setCurrentSteps,
  updateFormData,
} from "@/redux/slices/onboardingTutorSlice";

const FormSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

export function ProfileDescription() {
  const currentStep = useAppSelector((store) => store.onboarding.currentStep);
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    dispatch(setCurrentSteps(currentStep + 1));
    dispatch(updateFormData(data));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="w-full py-[10px] pl-[60px]">
          <h3 className="text-[#121117] mr-[50px] font-bold text-[32px]">
            Profile description
          </h3>
          <p className="py-[10px]">
            This info will go on your public profile. Write it in the language
            you’ll be teaching and make sure to follow our .
          </p>
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="pt-[20px]">
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can <span>@mention</span> other users and organizations.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <NavButtons />
        </div>
      </form>
    </Form>
  );
}
