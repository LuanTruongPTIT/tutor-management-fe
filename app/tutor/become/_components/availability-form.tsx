"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
const Subjects = [
  {
    value: "Math",
    label: "Math",
  },
  {
    value: "History",
    label: "History",
  },
  {
    value: "Literature",
    label: "Literature",
  },
  {
    value: "Chemistry",
    label: "Chemistry",
  },
];
import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { steps } from "../../page";
import { setActiveSteps, setCompleted, updateFormData } from "@/lib/slices";
import { NavButton, totalSteps } from "./nav-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { tutorApiRequest } from "@/apiRequest/tutor";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import Link from "next/link";
import Image from "next/image";
const AvailabilitySchema = z.object({
  salary: z.string(),
});
export default function AvailabilityForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [values, setValues] = React.useState([]);
  const [isPending, startTransition] = React.useTransition();
  console.log("values", typeof values, values);
  const form = useForm<z.infer<typeof AvailabilitySchema>>({
    resolver: zodResolver(AvailabilitySchema),
    defaultValues: {
      salary: "",
    },
  });
  const completed = useAppSelector((store) => store.onboarding.completed);
  const dispatch = useAppDispatch();
  let formData = useAppSelector((store) => store.onboarding.updateFormData);
  const activeStep = useAppSelector((store) => store.onboarding.activeStep);
  async function processData(data: any) {
    formData = {
      ...formData,
      subject: Array.from(values),
      salary: data.salary,
    };
    dispatch(updateFormData(data));

    console.log("formData", formData);
    try {
      setIsLoading(true);
      const result = await tutorApiRequest.RegisterTutor(formData);
      startTransition(() => {
        if ((result.status = 200)) {
          setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
          }, 2000);
        }
        if ((result.status = 400)) {
          toast.error(data.message);
        }
      });
    } catch (error) {
      toast.error("Something went wrong");
    }
  }
  return (
    <>
      {!isLoading && !isSuccess && (
        <div className="flex max-w-[546px] relative flex-col w-full my-0 mx-auto">
          <div className="flex flex-cols flex-grow gap-[24px] space-x-5">
            <div className="flex-grow">
              <div className="flex items-start pb-[20px]">
                <h1 className="font-bold text-3xl">Availability</h1>
              </div>
              {/* <div className="leading-6 flex flex-wrap w-[450px] pb-[24px]">
              <p className="m-0 text-left">
                Start creating your public tutor profile. Your progress will be
                automatically saved as you complete each section. You can return
                at any time to finish your registration.
              </p>
            </div> */}
              <div className="flex w-full flex-col items-start gap-y-5">
                <Select
                  label="Subject"
                  selectionMode="multiple"
                  placeholder="Select a subject"
                  selectedKeys={values}
                  className="max-w-xs"
                  onSelectionChange={setValues}
                  // onChange={(e) =>
                  //   dispatch(
                  //     updateFormData({ subject: Array.from(e.target.value) })
                  //   )
                  // }
                >
                  {Subjects.map((subject) => (
                    <SelectItem key={subject.value} value={subject.value}>
                      {subject.label}
                    </SelectItem>
                  ))}
                </Select>
                <div>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(processData)}>
                      <FormField
                        control={form.control}
                        name="salary"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex items-start flex-col gap-2">
                              <FormLabel>Salary</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder=""
                                  className="w-[320px] h-[40px] border-[#dcdce5] border-[2px] border-solid leading-6"
                                  // value={field.value || ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      <div className="flex flex-row pt-[15px]"></div>
                      <NavButton />
                      {/* <Button onClick={() => processData(values)}>Click</Button> */}
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading && (
        <div>
          <BeatLoader />
        </div>
      )}
      {isSuccess && (
        <div className="h-full w-full flex flex-col items-center justify-center gap-[20px]">
          <div className="flex flex-col items-center">
            <Image
              src={"/images/icons/icon-thank-you.svg"}
              alt="Thank you icon"
              width={56}
              height={56}
            />

            <strong className="mt-6 text-2xl	text-denim font-bold">
              Thank you!
            </strong>

            <p className="mt-2 text-base text-grey font-normal leading-6 tracking-[0.5px] text-center">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at admin.preply@gmail.com.
            </p>
          </div>
          <Button>
            <Link href="/">Back to home page</Link>
          </Button>
        </div>
      )}
    </>
  );
}
