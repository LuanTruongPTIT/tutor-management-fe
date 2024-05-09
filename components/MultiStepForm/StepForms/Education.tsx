import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import NavButtons from "../NavButton";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { EducationSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  setCurrentSteps,
  updateFormData,
} from "@/redux/slices/onboardingTutorSlice";
import UploadMulti from "@/components/upload";
import { TimePicker } from "antd";
export default function Education() {
  const currentStep = useAppSelector((store) => store.onboarding.currentStep);
  const result = useAppSelector((data) => data.onboarding.formData);
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof EducationSchema>>({
    resolver: zodResolver(EducationSchema),
    defaultValues: {
      universityName: "",
      degree: "",
      degreeType: "",
      specialization: "",
    },
  });
  async function processData(data: z.infer<typeof EducationSchema>) {
    dispatch(setCurrentSteps(currentStep + 1));
    dispatch(updateFormData(data));
    console.log(result);
  }
  return (
    <Form {...form}>
      <div className="w-[400px] flex items-center justify-center py-[10px] pl-[60px]">
        <h3 className="text-[#121117] mr-[50px] font-bold text-[32px]">
          Education
        </h3>
      </div>
      <div className="ml-[130px] w-[400px] text-[16px] leading-6 flex items-center justify-center pb-[24px]">
        <p>
          Tell students more about the higher education that you&apos;ve
          completed or are working on
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
              name="universityName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>University</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Select a subject to display"
                      type="text"
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="degree"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Degree</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="E.g. Bachelor’s degree in the English Language"
                      type="text"
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="degreeType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Degree type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a degree type to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="college">College</SelectItem>
                      <SelectItem value="university">University</SelectItem>
                      {/* <SelectItem value="History">History</SelectItem> */}
                    </SelectContent>
                  </Select>
                  {/* <FormDescription>
                    You can manage email addresses in your{" "}
                    
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="specialization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specialization</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="E.g. Information Security"
                      type="text"
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* <FormError message={error} />
        <FormSuccess message={success} /> */}
          <UploadMulti />
          {/* <TimePicker.RangePicker /> */}
           <NavButtons />
        </form>
      </div>
    </Form>
  );
}
