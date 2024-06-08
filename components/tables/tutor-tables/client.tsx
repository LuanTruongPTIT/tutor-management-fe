"use client";
import { DataTable } from "@/components/ui/data-table";
import { Student, Tutor } from "@/constants/data";
import { Separator } from "@radix-ui/react-separator";
import { useRouter } from "next/navigation";
import { columns } from "./column";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { adminApiRequest } from "@/apiRequest/admin";
interface ProductClientProps {
  data?: Tutor[] | null;
}
export const TutorClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Tutors (${data?.length ?? 0})`}
          description="Manage tutor"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/admin/tutor/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data ?? []} />
    </>
  );
};
