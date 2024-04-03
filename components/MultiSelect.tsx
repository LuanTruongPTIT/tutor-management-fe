"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import NavButtons from "./MultiStepForm/NavButton";
import { Input } from "./ui/input";
import { TimePicker } from "antd";
import moment from "moment";
import { NoUndefinedRangeValueType } from "rc-picker/lib/PickerInput/RangePicker";
import { Dayjs } from "dayjs";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
type Framework = Record<"value" | "label", string>;
type Subjects = Record<"value" | "label", string>;
const FRAMEWORKS = [
  {
    value: "Quận 1",
    label: "Quận 1",
  },
  {
    value: "Quận 2",
    label: "Quận 2",
  },
  {
    value: "Quận 3",
    label: "Quận 3",
  },
  {
    value: "Quận 4",
    label: "Quận 4",
  },
  {
    value: "Quận 5",
    label: "Quận 5",
  },
  {
    value: "Quận 6",
    label: "Quận 6",
  },
  {
    value: "Quận 7",
    label: "Quận 7",
  },
  {
    value: "Quận 8",
    label: "Quận 8",
  },
];

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
    label: "literature",
  },
  {
    value: "Chemistry",
    label: "Chemistry",
  },
];
const languages = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: " 6", value: 6 },
  { label: "7", value: 7 },
] as const;
export const AvabilitySchema = z.object({
  teachArea: z.array(z.string()),
  subject: z.array(z.string()),
  dayCount: z.number(),
  desiredSalary: z.string(),
  // subject: z.string(),
});
export function MultiSelect() {
  const form = useForm<z.infer<typeof AvabilitySchema>>({
    resolver: zodResolver(AvabilitySchema),
    defaultValues: {
      teachArea: [],
      subject: [],
      dayCount: 0,
      desiredSalary: "",
    },
  });
  const inputRef = React.useRef<HTMLInputElement>(null);
  const inputRefSubject = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [openSubject, setOpenSubject] = React.useState(false);
  const [selected, setSelected] = React.useState<Framework[]>([FRAMEWORKS[0]]);
  const [selectedSubject, setSelectedSubject] = React.useState<Subjects[]>([
    Subjects[0],
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [inputValueSubject, setInputValueSubject] = React.useState("");
  const [selectedTime, setSelectedTime] = React.useState<
    [Date | null, Date | null]
  >([null, null]);
  const [timePickers, setTimePickers] = React.useState([
    <TimePicker.RangePicker
      key={0}
      onChange={(
        dates: NoUndefinedRangeValueType<Dayjs>,
        dateStrings: [string, string]
      ) =>
        handleTimeChange([
          dates[0]?.toDate() || null,
          dates[1]?.toDate() || null,
        ])
      }
    />,
  ]);
  const addTimePicker = () => {
    setTimePickers([
      ...timePickers,
      <TimePicker.RangePicker key={timePickers.length} className="pl-[10px]" />,
    ]);
  };

  const handleTimeChange = (value: [Date | null, Date | null]) => {
    setSelectedTime(value);
    console.log("Selected time range:", value);
  };
  const handleUnselect = React.useCallback((framework: Framework) => {
    setSelected((prev) => prev.filter((s) => s.value !== framework.value));
  }, []);
  const handleUnselectSubject = React.useCallback((subject: Subjects) => {
    setSelectedSubject((prev) => prev.filter((s) => s.value !== subject.value));
  }, []);
  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelected((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }

        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    []
  );
  const handleKeyDownSubject = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRefSubject.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelectedSubject((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }

        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    []
  );
  const selectables = FRAMEWORKS.filter(
    (framework) => !selected.includes(framework)
  );
  const selectSubjects = Subjects.filter(
    (subject) => !selectedSubject.includes(subject)
  );
  async function processData(data: z.infer<typeof AvabilitySchema>) {
    data.subject = selected.map((framework) => framework.value);

    console.log("data", data);
  }
  // console.log("data", selected);
  return (
    <Form {...form}>
      <div className="w-[600px] flex flex-col items-start justify-start py-[10px] pl-[60px]">
        <div className="pb-[20px]">
          <h3 className="text-[#121117] mr-[50px] font-bold text-[32px]">
            Avaliability
          </h3>
          {/* </div> */}
          {/* <div className="ml-[130px] w-[400px] text-[16px] leading-6 flex items-center justify-center pb-[24px]"> */}
          <p>
            Tell students more about the higher education that you&apos;ve
            completed or are working on
          </p>
        </div>
        <form onSubmit={form.handleSubmit(processData)}>
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="pb-[10px]">
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Command
                    onKeyDown={handleKeyDownSubject}
                    className="overflow-visible bg-transparent"
                  >
                    <div className="group border border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                      <div className="flex gap-1 flex-wrap">
                        {selectedSubject.map((subject) => {
                          return (
                            <Badge key={subject.value} variant="secondary">
                              {subject.label}
                              <button
                                className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    handleUnselectSubject(subject);
                                  }
                                }}
                                onMouseDown={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                }}
                                onClick={() => handleUnselectSubject(subject)}
                              >
                                <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                              </button>
                            </Badge>
                          );
                        })}

                        <CommandPrimitive.Input
                          ref={inputRefSubject}
                          value={inputValueSubject}
                          onValueChange={setInputValueSubject}
                          onBlur={() => setOpenSubject(false)}
                          onFocus={() => setOpenSubject(true)}
                          placeholder="Select subjects..."
                          className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
                        />
                      </div>
                    </div>
                    <div className="relative mt-2">
                      {openSubject && selectSubjects.length > 0 ? (
                        <div className="absolute w-full z-10 top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                          <CommandGroup className="h-full overflow-auto">
                            {(selectSubjects || []).map((subject) => {
                              return (
                                <CommandItem
                                  key={subject.value}
                                  onMouseDown={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                  }}
                                  onSelect={(value) => {
                                    setInputValue("");
                                    setSelectedSubject((prev) => [
                                      ...prev,
                                      subject,
                                    ]);
                                  }}
                                  className={"cursor-pointer"}
                                >
                                  {subject.label}
                                </CommandItem>
                              );
                            })}
                          </CommandGroup>
                        </div>
                      ) : null}
                    </div>
                  </Command>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="teachArea"
            render={({ field }) => (
              <FormItem className="pb-[10px]">
                <FormLabel>Teaching Area</FormLabel>
                <FormControl>
                  <Command
                    onKeyDown={handleKeyDown}
                    className="overflow-visible bg-transparent"
                  >
                    <div className="group border border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                      <div className="flex gap-1 flex-wrap">
                        {selected.map((framework) => {
                          return (
                            <Badge key={framework.value} variant="secondary">
                              {framework.label}
                              <button
                                className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    handleUnselect(framework);
                                  }
                                }}
                                onMouseDown={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                }}
                                onClick={() => handleUnselect(framework)}
                              >
                                <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                              </button>
                            </Badge>
                          );
                        })}

                        <CommandPrimitive.Input
                          ref={inputRef}
                          value={inputValue}
                          onValueChange={setInputValue}
                          onBlur={() => setOpen(false)}
                          onFocus={() => setOpen(true)}
                          placeholder="Select teaching area..."
                          className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
                        />
                      </div>
                    </div>
                    <div className="relative mt-2">
                      {open && selectables.length > 0 ? (
                        <div className="absolute w-full z-10 top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                          <CommandGroup className="h-full overflow-auto">
                            {(selectables || []).map((framework) => {
                              return (
                                <CommandItem
                                  key={framework.value}
                                  onMouseDown={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                  }}
                                  onSelect={(value) => {
                                    setInputValue("");
                                    setSelected((prev) => [...prev, framework]);
                                  }}
                                  className={"cursor-pointer"}
                                >
                                  {framework.label}
                                </CommandItem>
                              );
                            })}
                          </CommandGroup>
                        </div>
                      ) : null}
                    </div>
                  </Command>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dayCount"
            render={({ field }) => (
              <FormItem className="pb-[10px] flex flex-col">
                <FormLabel>Number of teaching sessions</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[200px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? languages.find(
                              (language) => language.value === field.value
                            )?.label
                          : "Select language"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      {/* <CommandInput placeholder="Search language..." /> */}
                      <CommandEmpty>No language found.</CommandEmpty>
                      <CommandGroup>
                        {languages.map((language) => (
                          <CommandItem
                            value={language.label}
                            key={language.value}
                            onSelect={() => {
                              form.setValue("dayCount", language.value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                language.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {language.label}
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
          <FormField
            control={form.control}
            name="desiredSalary"
            render={({ field }) => (
              <FormItem className="pb-[10px]">
                <FormLabel>Desired salary</FormLabel>
                <FormControl className="w-[200px]">
                  <Input {...field} placeholder="5.000.000đ" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <TimePicker.RangePicker
            onChange={(
              dates: NoUndefinedRangeValueType<Dayjs>,
              dateStrings: [string, string]
            ) =>
              handleTimeChange([
                dates[0]?.toDate() || null,
                dates[1]?.toDate() || null,
              ])
            }
          /> */}
          <div>
            {timePickers}
            <Button onClick={addTimePicker}>+</Button>
          </div>
          <NavButtons />
        </form>
      </div>
    </Form>
  );
}

// const App: React.FC = () => <TimePicker.RangePicker />;

// export default App;
