"use client";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { FileUpload } from "@/components/file-upload";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEdgeStore } from "@/lib/edgestore";
import { useState } from "react";
interface imagePhotoProps {
  setUrls: (urls: string) => void;
}
export default function ImagePhoto(setUrls: imagePhotoProps) {
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();
  const [progress, setProgress] = useState(0);
  // const [urls, setUrls] = useState<{
  //   url: string;
  //   thumbnailUrl: string | null;
  // }>();

  return (
    <Card>
      <CardContent>
        <div className="p-9">
          <SingleImageDropzone
            width={200}
            height={200}
            value={file}
            dropzoneOptions={{
              maxSize: 1024 * 1024 * 3, // 1MB
            }}
            onChange={(file) => {
              setFile(file);
            }}
            className="bg-background text-foreground"
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

                // setUrls({
                //   url: res.url,
                //   thumbnailUrl: res.thumbnailUrl,
                // });
                setUrls.setUrls(res.url);
              }
            }}
            className="mt-4 ml-14"
          >
            Upload
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
