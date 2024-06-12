"use client";
import Loading from "@/app/loading";
import Breadcrumb from "@/components/ui/breadcrumb";
import { Suspense } from "react";
import { CourseTable } from "./_components/Course";
import { useQuery } from "@tanstack/react-query";
import { adminApiRequest } from "@/apiRequest/admin";
import { Course } from "@/constants/data";
import { BeatLoader } from "react-spinners";

const breadcrumbItems = [{ title: "Course", link: "/admin/courses" }];
export default function Page() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["course"],
    queryFn: adminApiRequest.GetAllCourseByAdmin,
  });
  const courses = ((data as any)?.data?.course as Course[])
    ? (data as any)?.data?.course
    : [];
  if (isLoading) {
    return (
      <Suspense fallback={<Loading />}>
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
          <Breadcrumb items={breadcrumbItems} />
          <BeatLoader />
        </div>
      </Suspense>
    );
  }
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
          <Breadcrumb items={breadcrumbItems} />
          <CourseTable data={courses ? courses : []} />
        </div>
      </Suspense>
    </>
  );
}
