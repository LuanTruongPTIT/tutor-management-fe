"use client";

import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { Button } from "@/components/ui/button";
import { useEdgeStore } from "@/lib/edgestore";
import Link from "next/link";
import { useState } from "react";
import NavButtons from "../NavButton";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  setCurrentSteps,
  updateFormData,
} from "@/redux/slices/onboardingTutorSlice";

export default function UploadPhoto() {
  const [file, setFile] = useState<File>();

  const currentStep = useAppSelector((store) => store.onboarding.currentStep);

  const [progress, setProgress] = useState(0);
  const [urls, setUrls] = useState<{
    url: string;
    thumbnailUrl: string | null;
  }>();
  const dispatch = useAppDispatch();
  const { edgestore } = useEdgeStore();
  return (
    // <form onSubmit={handleSubmit(processData)}>

    <div className="flex flex-col items-center m-6 gap-2">
      <div className="w-full pb-[10px] flex items-start justify-start">
        <h3 className="text-[32px] font-bold">Profile photo</h3>
      </div>
      <div className="flex pb-[10px] w-full items-start justify-start">
        <h4 className="text-[20px] font-medium">
          Make a great first impression
        </h4>
      </div>
      <div className="flex w-full pb-[10px]">
        <p>Tutors who look friendly and professional get the most students</p>
      </div>
      <SingleImageDropzone
        width={200}
        height={200}
        value={file}
        dropzoneOptions={{
          maxSize: 1024 * 1024 * 1, // 1MB
        }}
        onChange={(file) => {
          setFile(file);
        }}
      />

      <div className="h-[6px] w-44 border rounded overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-150"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <Button
        // className=" text-white rounded px-2 hover:opacity-80"
        onClick={async () => {
          if (file) {
            const res = await edgestore.myPublicImages.upload({
              file,
              input: { type: "post" },
              onProgressChange: (progress) => {
                console.log("progress", progress);
                setProgress(progress);
              },
            });

            setUrls({
              url: res.url,
              thumbnailUrl: res.thumbnailUrl,
            });
            dispatch(updateFormData({ url: res.url }));
          }
        }}
      >
        Upload
      </Button>
      <div className="w-full pt-[60px] pr-[70px]  ">
        <NavButtons isCheck={true} />
      </div>
    </div>
    // </form>
  );
}
