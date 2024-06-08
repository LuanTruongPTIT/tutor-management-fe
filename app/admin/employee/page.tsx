"use client";
import BreadCrumb from "@/components/ui/breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Employee } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import { columns } from "./_components/tables/employee-tables/columns";
import { EmployeeTable } from "./_components/tables/employee-tables/employee-table";
import { useQuery } from "@tanstack/react-query";
import { adminApiRequest } from "@/apiRequest/admin";
import { BeatLoader } from "react-spinners";
import { DataTable } from "@/components/ui/data-table";

const breadcrumbItems = [{ title: "Employee", link: "/dashboard/employee" }];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function Page({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const { data, isLoading, error } = useQuery({
    queryKey: ["employee"],
    queryFn: () => {
      return adminApiRequest.GetAllUsers();
    },
  });
  console.log("data", data);

  if (isLoading) {
    return <BeatLoader />;
  }
  const employee: Employee[] = (data as any).data.user;
  console.log("employee", employee, data);
  const totalUsers = employee?.length;
  // const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  // const country = searchParams.search || null;
  // const offset = (page - 1) * pageLimit;

  // const employeeRes = await res.json();
  // const totalUsers = employeeRes.total_users; //1000
  const pageCount = Math.ceil(totalUsers / pageLimit);

  // const {}

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Employee (${employee?.length})`}
            description="Manage employees (Server side table functionalities.)"
          />

          <Link
            href={"/admin/member/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />

        {employee && (
          // <EmployeeTable
          //   searchKey="email"
          //   pageNo={page}
          //   columns={columns}
          //   totalUsers={employee?.length}
          //   data={employee}
          //   pageCount={pageCount}
          // />
          <DataTable searchKey="email" columns={columns} data={employee} />
        )}
      </div>
    </>
  );
}
