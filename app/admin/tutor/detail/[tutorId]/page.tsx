"use client";
import Breadcrumb from "@/components/ui/breadcrumb";
import CardDetailTutor from "./_component/Card-detail-tutor";
import { useQuery } from "@tanstack/react-query";
import { adminApiRequest } from "@/apiRequest/admin";
import { BeatLoader } from "react-spinners";
// import { useSearchParams } from "next/navigation";

export default function TutorDetail({
  params,
}: {
  params: { tutorId: string };
}) {
  // const searchParams = useSearchParams();
  // const id = searchParams.get("tutorId") as string;
  const { data, isLoading, error } = useQuery({
    queryKey: ["tutor-detail", params.tutorId],
    queryFn: () => adminApiRequest.GetTutorDetail(Number(params.tutorId)),
  });
  if (isLoading) {
    return (
      <div>
        <BeatLoader />
      </div>
    );
  }
  console.log(data);
  const result = (data as any).data.tutor as any;
  const breadcrumbItems = [
    { title: "Tutor", link: "/admin/tutor" },
    { title: "Detail", link: "/admin/tutor/detail" },
  ];
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <Breadcrumb items={breadcrumbItems} />
        {/* <UserClient data={users} /> */}
        <CardDetailTutor data={result} />
      </div>
    </>
  );
}
