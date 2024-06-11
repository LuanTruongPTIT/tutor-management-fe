"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@nextui-org/react";

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
import { EyeSlashFilledIcon } from "./icon/EyeSlashFilledIcon";
import { EyeFilledIcon } from "./icon/EyeFilledIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formCreateStudent = z.object({
  email: z.string().email(),
  password: z.string().min(10),
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  city: z.string(),
  country: z.string(),
  phone_number: z.string(),
  gender: z.string().optional(),
  parent_name: z.string().optional(),
  level: z.string().optional(),
  date_of_birth: z.string().optional(),
  name_school: z.string().optional(),
});

export default function FormCreateStudent() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [urls, setUrls] = React.useState("");
  const toggleVisibility = () => setIsVisible(!isVisible);
  const form = useForm<z.infer<typeof formCreateStudent>>({
    resolver: zodResolver(formCreateStudent),
    defaultValues: {},
  });

  async function onSubmit(values: any) {
    const form = { ...values, urls };
    console.log("form", form);
    try {
      await adminApiRequest.CreateStudentByAdmin(form);
      toast.success("Student created successfully");
    } catch (error: any) {
      console.log(error);
      console.log(error.payload.payload.message);
      toast.error(error.payload.payload.message);
    }
  }

  return (
    <div className="flex flex-row items-start h-[800px] justify-center gap-7">
      <ImagePhoto setUrls={setUrls} />
      <Card className=" max-h-[800px] w-[800px]">
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
                  name="firstName"
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
                  name="lastName"
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
                    <FormItem>
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

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue="Male"
                        >
                          <SelectTrigger className="h-[58px]">
                            <SelectValue placeholder="Gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Male</SelectItem>
                            <SelectItem value="2">Female</SelectItem>
                            <SelectItem value="3">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date_of_birth"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="date"
                          variant="bordered"
                          label="Date of Birth"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="parent_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          variant="bordered"
                          label="Parent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="level"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          // defaultValue="Male"
                        >
                          <SelectTrigger className="h-[58px]">
                            <SelectValue placeholder="Level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Primary</SelectItem>
                            <SelectItem value="2">Secondary</SelectItem>
                            <SelectItem value="3">High</SelectItem>
                            <SelectItem value="4">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="name_school"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          variant="bordered"
                          label="School Name"
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
