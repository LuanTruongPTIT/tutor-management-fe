"use client";
import { adminApiRequest } from "@/apiRequest/admin";
import Loading from "@/app/loading";
import { StudentClient } from "@/components/tables/student-tables/client";
import { UserClient } from "@/components/tables/user-tables/client";
import Breadcrumb from "@/components/ui/breadcrumb";

import { Student, students } from "@/constants/data";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { BeatLoader } from "react-spinners";
const breadcrumbItems = [{ title: "Student", link: "/admin/student" }];
export default function Page() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["student"],
    queryFn: adminApiRequest.GetAllStudentByAdmin,
  });
  const student = ((data as any)?.data.student as Student[])
    ? (data as any)?.data.student
    : [];
  console.log(student);
  if (isLoading) {
    return (
      <>
        <BeatLoader />
      </>
    );
  }
  if (error) {
    return (
      <>
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
          <Breadcrumb items={breadcrumbItems} />
          <StudentClient data={student} />
        </div>
      </>
    );
  }
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
          <Breadcrumb items={breadcrumbItems} />
          <StudentClient data={student} />
        </div>
      </Suspense>
    </>
  );
}
