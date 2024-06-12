"use client";

import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { UserNav } from "./_components/user-nav";

import { useQuery } from "@tanstack/react-query";
import { adminApiRequest } from "@/apiRequest/admin";
import { BeatLoader } from "react-spinners";

// Simulate a database read for tasks.

export default function SchedulePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["schedule"],
    queryFn: adminApiRequest.GetAllSchedule,
  });
  if (isLoading) {
    return (
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BeatLoader />
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <DataTable data={[]} columns={columns} />
      </div>
    );
  }
  const schedule = ((data as any)?.data?.schedule as [])
    ? (data as any)?.data?.schedule
    : [];
  return (
    <>
      <div className="md:hidden"></div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <p className="text-muted-foreground">
              Here&apos;s a list of schedule!
            </p>
          </div>
          <div className="flex items-center space-x-2">{/* <UserNav /> */}</div>
        </div>
        <DataTable data={schedule} columns={columns} />
      </div>
    </>
  );
}
