"use client";
import { DataTable } from "@/components/ui/data-table";
import { User } from "@/constants/data";

import { Separator } from "@radix-ui/react-separator";
import { useRouter } from "next/navigation";
import { columns } from "./column";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Plus } from "lucide-react";
interface ProductClientProps {
  data: User[];
}
export const UserClient: React.FC<ProductClientProps> = ({ data }) => {
  console.log(data);
  const router = useRouter();
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Tutors (${data.length})`}
          description="Manage tutors (Client side table functionalities.)"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/user/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
