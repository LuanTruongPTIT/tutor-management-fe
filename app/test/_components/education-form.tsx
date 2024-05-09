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
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { setActiveSteps, setCompleted } from "@/lib/slices";
import { steps } from "../page";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";

export const EducationSchema = z
  .object({
    universityName: z.string(),
    degree: z.string(),
    degreeType: z.string(),
    specialization: z.string(),
    startDate: z.number(),
    endDate: z.number(),
  })
  .refine((data) => data.endDate > data.startDate, {
    message: "End date must be greater than start date",
    path: ["endDate"],
  });
const years = [
  { label: "2013", value: "2013" },
  { label: "2014", value: "2014" },
  { label: "2015", value: "2015" },
  { label: "2016", value: "2016" },
  { label: "2017", value: "2017" },
  { label: "2018", value: "2018" },
  { label: "2019", value: "2019" },
  { label: "2020", value: "2020" },
  { label: "2021", value: "2021" },
  { label: "2022", value: "2022" },
  { label: "2023", value: "2023" },
  { label: "2024", value: "2024" },
] as const;

export default function EducationForm() {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((store) => store.onboarding.updateFormData);

  const form = useForm<z.infer<typeof EducationSchema>>({
    resolver: zodResolver(EducationSchema),
    defaultValues: {
      universityName: formData.universityName ? formData.universityName : "",
      degree: formData.degree ? formData.degree : "",
      degreeType: formData.degreeType ? formData.degreeType : "",
      specialization: formData.specialization ? formData.specialization : "",
    },
  });

  const activeStep = useAppSelector((store) => store.onboarding.activeStep);

  const completed = useAppSelector((store) => store.onboarding.completed);
  function processData(data: z.infer<typeof EducationSchema>) {
    console.log("data", data);
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
              <h1 className="font-bold text-3xl">Education</h1>
            </div>
            <div className="leading-6 flex flex-wrap w-[450px] pb-[24px]">
              <p className="m-0 text-left">
                Tell students more about the higher education that you&apos;ve
                completed or are working on
              </p>
            </div>

            <form onSubmit={form.handleSubmit(processData)}>
              <div className="pb-4 mt-4">
                <FormField
                  control={form.control}
                  name="universityName"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start flex-col gap-2">
                        <FormLabel>Uiversity name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder=""
                            className="w-[450px] h-[40px] border-[#dcdce5] border-[2px] border-solid leading-6"
                            // value={field.value || ""}
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
                  name="degree"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start flex-col gap-2">
                        <FormLabel>Degree</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder=""
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
                  name="degreeType"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start flex-col gap-2">
                        <FormLabel className="text-sm">Degree Type</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder=""
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
                  name="specialization"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start flex-col gap-2">
                        <FormLabel>Specialization</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder=""
                            className="w-[450px] h-[40px] border-[#dcdce5] border-[2px] border-solid leading-6"
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="pb-3 w-[450px] flex flex-col">
                <label className="text-left text-sm font-medium pb-1">
                  Years of study
                </label>
                <div className="flex flex-row gap-x-5">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        {/* <FormLabel className="text-left">
                        Years of study
                      </FormLabel> */}
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                role="combobox"
                                className={cn(
                                  "w-[200px] h-[45px] justify-between",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value
                                  ? years.find(
                                      (year) =>
                                        year.value === String(field.value)
                                    )?.label
                                  : "Select year"}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-[200px] p-0">
                            <Command>
                              <CommandInput placeholder="Search year..." />
                              <CommandEmpty>No year found.</CommandEmpty>
                              <CommandGroup>
                                {years.map((year) => (
                                  <CommandItem
                                    value={year.label}
                                    key={year.value}
                                    onSelect={() => {
                                      form.setValue(
                                        "startDate",
                                        Number(year.value)
                                      );
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        String(year.value) ===
                                          String(field.value)
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {year.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="pt-[11px]">-</div>
                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        {/* <FormLabel className="text-left">End of study</FormLabel> */}
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                role="combobox"
                                className={cn(
                                  "w-[200px] h-[45px] justify-between",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value
                                  ? years.find(
                                      (year) =>
                                        year.value === String(field.value)
                                    )?.label
                                  : "Select year"}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-[200px] p-0">
                            <Command>
                              <CommandInput placeholder="Search year..." />
                              <CommandEmpty>No year found.</CommandEmpty>
                              <CommandGroup>
                                {years.map((year) => (
                                  <CommandItem
                                    value={year.label}
                                    key={year.value}
                                    onSelect={() => {
                                      form.setValue(
                                        "endDate",
                                        Number(year.value)
                                      );
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        String(year.value) ===
                                          String(field.value)
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {year.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <NavButton />
            </form>
          </div>
        </div>
      </div>
    </Form>
  );
}
