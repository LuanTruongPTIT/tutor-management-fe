import { ourFileRouter } from "@/app/api/uploadthing/core";
import { FileUpload } from "@/components/file-upload";
import { Card, CardContent } from "@/components/ui/card";
import ImagePhoto from "./image-photo";
import FormCreateStudent from "./form-create-student";

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}
export default function CreateStudent() {
  return (
    <div className="h-screen pt-[20px]">
      {/* <div className="flex flex-row items-start h-[600px] justify-center gap-7"> */}

      <FormCreateStudent />
      {/* </div> */}
    </div>
  );
}
