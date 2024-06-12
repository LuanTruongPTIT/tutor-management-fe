import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Course, Student } from "@/constants/data";
import { useRouter } from "next/navigation";
import { DataTable } from "../../attendance/_components/data-table";
import { columnCourse } from "./Column-Course";

interface StudentClientProps {
  data?: Course[] | [];
}
export const CourseTable: React.FC<StudentClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Courses (${data?.length ?? 0})`}
          description="Manage Courses"
        />
      </div>
      <Separator />
      <DataTable columns={columnCourse} data={data ?? []} />
    </>
  );
};
