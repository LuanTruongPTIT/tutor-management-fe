"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "./icon/EyeSlashFilledIcon";
import { EyeFilledIcon } from "./icon/EyeFilledIcon";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import ImagePhoto from "./image-photo";
import { a } from "@react-spring/web";
import { adminApiRequest } from "@/apiRequest/admin";
import { toast } from "sonner";

const formCreateTutor = z.object({
  email: z.string().email(),
  password: z.string().min(10),
  first_name: z.string(),
  last_name: z.string(),
  address: z.string(),
  city: z.string(),
  country: z.string(),
  phone_number: z.string(),
});

export default function FormCreateTutor() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [urls, setUrls] = React.useState("");
  const toggleVisibility = () => setIsVisible(!isVisible);
  const form = useForm<z.infer<typeof formCreateTutor>>({
    resolver: zodResolver(formCreateTutor),
    defaultValues: {},
  });

  async function onSubmit(values: any) {
    console.log("data", values);
    console.log("urls", urls);
    const form = { ...values, urls };
    console.log("form", form);
    try {
      await adminApiRequest.CreateTutorByAdmin(form);
      toast.success("Tutor created successfully");
    } catch (error: any) {
      console.log("error", error);
      toast.error(error.message);
    }
  }

  return (
    <div className="flex flex-row items-start h-[800px] justify-center gap-7">
      <ImagePhoto setUrls={setUrls} />
      <Card className=" max-h-[500px] w-[800px]">
        <CardContent className="p-7">
          {/* <div className="flex flex-row"> */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          variant="bordered"
                          label="Email"
                          {...field}
                          size="md"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <Input
                            label="Password"
                            variant="bordered"
                            placeholder="Enter your password"
                            {...field}
                            endContent={
                              <button
                                className="focus:outline-none"
                                type="button"
                                onClick={toggleVisibility}
                              >
                                {isVisible ? (
                                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                              </button>
                            }
                            type={isVisible ? "text" : "password"}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          variant="bordered"
                          label="First Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          variant="bordered"
                          label="Last Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          variant="bordered"
                          label="Address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>]

                      
                      <FormControl>
                        <Input
                          type="text"
                          variant="bordered"
                          label="City"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          variant="bordered"
                          label="Country"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          variant="bordered"
                          label="Phone Number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex w-full items-end justify-end pt-2">
                <Button type="submit">Create Tutor</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
