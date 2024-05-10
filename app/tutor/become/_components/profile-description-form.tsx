import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { NavButton, totalSteps } from "./nav-button";

import { setActiveSteps, setCompleted, updateFormData } from "@/lib/slices";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { steps } from "../page";

export const ProfileSchema = z.object({
  bio: z.string().max(500, { message: "Bio must be less than 500 characters" }),
});
export default function ProfileDescriptionForm() {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((store) => store.onboarding.updateFormData);

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      bio: formData.bio ? formData.bio : "",
    },
  });

  const activeStep = useAppSelector((store) => store.onboarding.activeStep);

  const completed = useAppSelector((store) => store.onboarding.completed);
  function processData(data?: z.infer<typeof ProfileSchema>) {
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
              <h1 className="font-bold text-3xl">Profile description</h1>
            </div>
            <div className="leading-6 flex flex-wrap w-[450px] pb-[24px]">
              <p className="m-0 text-left">
                This info will go on your public profile.
              </p>
            </div>

            <form onSubmit={form.handleSubmit(processData)}>
              <div className="pb-4 mt-4 w-[80%]">
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start flex-col gap-2">
                        <p className="text-left pb-[10px]">
                          Show potential students who you are! Share your
                          teaching experience and passion for education and
                          briefly mention your interests and hobbies.
                        </p>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us a little bit about yourself"
                            {...field}
                            className="resize-none h-[100px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <NavButton />
            </form>
          </div>
        </div>
      </div>
    </Form>
  );
}
