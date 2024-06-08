import { ourFileRouter } from "@/app/api/uploadthing/core";
import { FileUpload } from "@/components/file-upload";
import { Card, CardContent } from "@/components/ui/card";
import ImagePhoto from "./image-photo";
import FormCreateTutor from "./from-create-tutor";
interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}
export default function CreateTutor() {
  return (
    <div className="h-screen pt-[20px]">
      {/* <div className="flex flex-row items-start h-[600px] justify-center gap-7"> */}

      <FormCreateTutor />
      {/* </div> */}
    </div>
  );
}
