"use client";
import FileUpload from "@/components/file/file-upload";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { NavButton, totalSteps } from "./nav-button";
import { setActiveSteps, setCompleted, updateFormData } from "@/lib/slices";
import { Separator } from "@/components/ui/separator";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { useState } from "react";
import { steps } from "../../page";
import { useEdgeStore } from "@/lib/edgestore";
import { Button } from "@/components/ui/button";
import { Check, GraduationCap, School } from "lucide-react";
import Image from "next/image";

const ImgSchema = z.object({
  fileName: z.string(),
  name: z.string(),
  fileSize: z.number(),
  size: z.number(),
  fileKey: z.string(),
  key: z.string(),
  fileUrl: z.string(),
  url: z.string(),
});
export const IMG_MAX_LIMIT = 1;

const photoSchema = z.object({
  imgUrl: z.string(ImgSchema).max(IMG_MAX_LIMIT, {
    message: "You can only add up to 1 images",
  }),
});
type PhotoFormValues = z.infer<typeof photoSchema>;
export const PhotoForm = () => {
  const [file, setFile] = useState<File>();
  const [progress, setProgress] = useState(0);
  const values = useAppSelector((store) => store.onboarding.updateFormData);

  const [urls, setUrls] = useState<{
    url: string;
    thumbnailUrl: string | null;
  }>();
  const { edgestore } = useEdgeStore();
  const defaultValues =
    values.imgUrl !== undefined ? values.imgUrl : { imgUrl: "" };
  const form = useForm<PhotoFormValues>({
    resolver: zodResolver(photoSchema),
    defaultValues: { imgUrl: defaultValues?.imgUrl },
  });
  const dispatch = useAppDispatch();
  const activeStep = useAppSelector((store) => store.onboarding.activeStep);
  const completed = useAppSelector((store) => store.onboarding.completed);
  // data: z.infer<typeof photoSchema>;
  async function processData() {
    console.log("processData");
    const completedSteps = () => {
      return Object.keys(completed).length;
    };
    const allStepsCompleted = () => {
      return completedSteps() + 1 === totalSteps();
    };
    const isLastStep = (): boolean => {
      return activeStep === totalSteps() - 1;
    };

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
    <div className="flex max-w-[546px] relative flex-col w-full my-0 mx-auto">
      <div className="flex flex-cols flex-grow gap-[24px] space-x-5">
        <div className="flex-grow">
          <div className="flex items-start pb-[20px]">
            <h1 className="font-bold text-3xl">Profile photo</h1>
          </div>
          <div className="leading-6 flex flex-wrap w-[450px] pb-[24px]">
            <p className="m-0 text-left">
              Choose a photo that will help learners get to know you.
            </p>
          </div>
          <Separator className="w-[full] items-start justify-start mr-auto" />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(processData)}>
              <div className="pb-4 mt-4">
                <FormField
                  control={form.control}
                  name="imgUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex flex-row gap-6">
                          <SingleImageDropzone
                            width={200}
                            height={150}
                            value={!file ? values.imgUrl : file}
                            dropzoneOptions={{
                              maxSize: 1024 * 1024 * 1, // 1MB
                            }}
                            onChange={(file) => {
                              setFile(file);
                            }}
                          />
                          <div className="flex flex-col gap-y-4 items-start justify-start">
                            <h1 className="text-2xl text-[#121117] font-bold leading-8">
                              {values.lastName} {values.firstName}
                            </h1>
                            <div className="flex flex-row gap-x-2">
                              <span>
                                <GraduationCap
                                  width={20}
                                  height={20}
                                  className="opacity-20"
                                />
                              </span>
                              <p className="text-sm text-gray-400">
                                Apply to be a tutor
                              </p>
                            </div>
                          </div>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="h-[6px] ml-[15px] w-44 border rounded overflow-hidden mb-[20px]">
                  <div
                    className="h-full bg-black transition-all duration-150"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>

                <Separator className="w-[full] items-start justify-start mr-auto" />
                <Button
                  onClick={async (e) => {
                    e.preventDefault();
                    if (file) {
                      const res = await edgestore.myPublicImages.upload({
                        file,
                        input: { type: "post" },
                        onProgressChange: (progress) => {
                          setProgress(progress);
                        },
                      });
                      setUrls({
                        url: res.url,
                        thumbnailUrl: res.thumbnailUrl,
                      });
                      dispatch(updateFormData({ imgUrl: res.url }));
                      // processData();
                    }
                  }}
                  className="w-full h-[40px] border-[2px] border-black mt-[10px]"
                  variant="secondary"
                >
                  Upload new photo
                </Button>
              </div>
              <div className="pt-[16px] pb-[10px]">
                <div className="flex flex-col gap-y-4 items-start justify-start">
                  <h1 className="text-2xl font-semibold text-[#121117]">
                    What your photo needs
                  </h1>
                  <div className="flex w-[80%] flex-row items-stretch justify-between">
                    <Image
                      src="/components.jpeg"
                      width={96}
                      height={96}
                      alt="image"
                    />
                    <Image
                      src="/components.jpeg"
                      width={96}
                      height={96}
                      alt="image"
                    />
                    <Image
                      src="/components.jpeg"
                      width={96}
                      height={96}
                      alt="image"
                    />
                    <Image
                      src="/components.jpeg"
                      width={96}
                      height={96}
                      alt="image"
                    />
                  </div>
                  <div className="flex pt-4 flex-col gap-3">
                    <div className="flex flex-row gap-2">
                      <Check />
                      <p>You should be facing forward</p>
                    </div>
                    <div className="flex flex-row gap-2">
                      <Check />
                      <p>You should be centered and upright</p>
                    </div>
                    <div className="flex flex-row gap-2">
                      <Check />
                      <p>
                        Your face and eyes should be visible (except for
                        religious reasons)
                      </p>
                    </div>
                    <div className="flex flex-row gap-2">
                      <Check />
                      <p>You should be the only person in the photo</p>
                    </div>
                    <div className="flex flex-row gap-2">
                      <Check />
                      <p>Avoid logos or contact information</p>
                    </div>
                  </div>
                </div>
              </div>
              <NavButton />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
