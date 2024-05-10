import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { updateFormData } from "@/redux/slices/onboardingTutorSlice";

import { AboutTutorSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { NavButton, totalSteps } from "./nav-button";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { setActiveSteps, setCompleted } from "@/lib/slices";
import { steps } from "../page";

export default function AboutForm() {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((store) => store.onboarding.updateFormData);

  const form = useForm<z.infer<typeof AboutTutorSchema>>({
    resolver: zodResolver(AboutTutorSchema),
    defaultValues: {
      firstName: formData.firstName ? formData.firstName : "",
      lastName: formData.lastName ? formData.lastName : "",
      email: formData.email ? formData.email : "",
      phone: formData.phone ? formData.phone : "",
      isAge18: formData.isAge18 ? formData.isAge18 : false,
    },
  });

  const activeStep = useAppSelector((store) => store.onboarding.activeStep);

  const completed = useAppSelector((store) => store.onboarding.completed);
  function processData(data?: z.infer<typeof AboutTutorSchema>) {
    const completedSteps = () => {
      return Object.keys(completed).length;
    };
    const allStepsCompleted = () => {
      return completedSteps() + 1 === totalSteps();
    };
    const isLastStep = (): boolean => {
      return activeStep === totalSteps() - 1;
    };
    dispatch(updateFormData(data));
    const newCompleted = { ...completed };
    newCompleted[activeStep] = true;
    dispatch(setCompleted(newCompleted));

    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    dispatch(setActiveSteps(newActiveStep));
  }
  return (
    <Form {...form}>
      <div className="flex max-w-[546px] relative flex-col w-full my-0 mx-auto">
        <div className="flex flex-cols flex-grow gap-[24px] space-x-5">
          <div className="flex-grow">
            <div className="flex items-start pb-[20px]">
              <h1 className="font-bold text-3xl">About</h1>
            </div>
            <div className="leading-6 flex flex-wrap w-[450px] pb-[24px]">
              <p className="m-0 text-left">
                Start creating your public tutor profile. Your progress will be
                automatically saved as you complete each section. You can return
                at any time to finish your registration.
              </p>
            </div>

            <form onSubmit={form.handleSubmit(processData)}>
              <div className="pb-4 mt-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start flex-col gap-2">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="luan@gmail.com"
                            className="w-[450px] h-[40px] border-[#dcdce5] border-[2px] border-solid leading-6"
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="pb-3">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start flex-col gap-2">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Truong"
                            className="w-[450px] h-[40px] border-[#dcdce5] border-[2px] border-solid leading-6"
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <div className="pb-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start flex-col gap-2">
                        <FormLabel className="text-sm">Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="example@gmail.com"
                            className="w-[450px] h-[40px] border-[#dcdce5] border-[2px] border-solid leading-6"
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="pb-3">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start flex-col gap-2">
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="0335219807"
                            className="w-[450px] h-[40px] border-[#dcdce5] border-[2px] border-solid leading-6"
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="pb-3">
                <FormField
                  control={form.control}
                  name="isAge18"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start w-[450px] space-x-2 space-y-0 rounded-md p-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>I confirm I’m over 18</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <NavButton />
              {/* <Button>Click</Button> */}
            </form>
          </div>
        </div>
      </div>
    </Form>
  );
}
