"use client";
import { adminApiRequest } from "@/apiRequest/admin";
import { TutorClient } from "@/components/tables/tutor-tables/client";
import { UserClient } from "@/components/tables/user-tables/client";
import Breadcrumb from "@/components/ui/breadcrumb";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tutor, users } from "@/constants/data";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import Loading from "@/app/loading";
const breadcrumbItems = [{ title: "Tutor", link: "/admin/tutor" }];
export default function Page() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tutor"],
    queryFn: adminApiRequest.GetAllTutors,
  });
  const tutors = ((data as any)?.data?.tutor as Tutor[])
    ? (data as any)?.data?.tutor
    : [];
  if (isLoading) {
  }
  if (error) {
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
          <Breadcrumb items={breadcrumbItems} />
          <TutorClient data={tutors} />
        </div>
      </Suspense>
    </>;
  }
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
          <Breadcrumb items={breadcrumbItems} />
          <TutorClient data={tutors} />
        </div>
      </Suspense>
    </>
  );
}
