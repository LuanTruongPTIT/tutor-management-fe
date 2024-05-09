"use client";
import { DataTable } from "@/components/ui/data-table";
import { z } from "zod";

import { Application, applicationSchema } from "../../schema/application";
import { columns_interview } from "../application-interview/columns";
import { columns_review } from "./columns-review";
import { useQuery } from "@tanstack/react-query";
import { tutorApiRequest } from "@/apiRequest/tutor";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

export const ApplicationReviewData = [
  {
    id: 1,
    name: "Trương Luân",
    position: "Application for tutor",
    logo: "/golang2.png",
    status: "in progress",
    createdAt: "17 oct 2024",
    index: 1,
  },
];
export type ApplicationReview = z.infer<typeof applicationSchema>;
export default function ApplicationReview() {
  const [result, setResult] = useState<Application[]>([]);
  const { data, isLoading, error } = useQuery<Application[]>({
    queryKey: ["applications-review"],
    queryFn: tutorApiRequest.GetAllAplicationReview,
  });
  useEffect(() => {
    if (data) {
      setResult(data);
    }
  }, [data]);
  return (
    <>
      {isLoading ? (
        <div>
          <BeatLoader />
        </div>
      ) : (
        <DataTable data={result} columns={columns_review} searchKey="name" />
      )}
    </>
  );
}
