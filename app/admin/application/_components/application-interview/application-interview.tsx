"use client";
import { DataTable } from "@/components/ui/data-table";
import { z } from "zod";
import { columns_interview } from "./columns";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { tutorApiRequest } from "@/apiRequest/tutor";

export const ApplicationInterviewSchema = z.object({
  id: z.number(),
  name: z.string(),
  logo: z.string(),
  position: z.string(),
  in_stage: z.string(),
  status: z.string(),
});

export const ApplicationInterviewData = [
  {
    id: 1,
    name: "Trương Luân",
    position: "Application for tutor",
    logo: "/golang2.png",
    status: "interview",
    in_stage: "1",
  },
];
export type ApplicationInterview = z.infer<typeof ApplicationInterviewSchema>;
export default function ApplicationInterview() {
  const [result, setResult] = useState<ApplicationInterview[]>([]);
  const { data, isLoading, error } = useQuery<ApplicationInterview[]>({
    queryKey: ["applications-interview"],
    queryFn: tutorApiRequest.GetAllApplicationInterview,
  });
  useEffect(() => {
    if (data) {
      setResult(data);
    }
  }, [data]);
  return (
    <>
      <DataTable data={result} columns={columns_interview} searchKey="name" />
    </>
  );
}
