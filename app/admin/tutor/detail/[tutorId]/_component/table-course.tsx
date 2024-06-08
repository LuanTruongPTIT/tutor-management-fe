import { DataTable } from "@/components/ui/data-table";
import { TutorCourseClass } from "@/schema";
import { columnsCourseClass } from "./columns-course-class";

interface TableTutorCourseProps {
  data: TutorCourseClass[] | [];
}

export default function TableTutorCourseClass({ data }: TableTutorCourseProps) {
  return <DataTable data={data} columns={columnsCourseClass} />;
}
