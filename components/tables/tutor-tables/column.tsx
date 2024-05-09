"use client";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Student, Tutor, User } from "@/constants/data";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
// export type Tutor = {
//   id: number;
//   name: string;
//   verified: boolean;
//   status: string;
//   address: string;
//   phone: string;
//   email: string;
//   gender: string;
// };
export const columns: ColumnDef<Tutor>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "photo",
    header: "Photo",
    cell: ({ row }) => {
      return (
        <Avatar>
          <AvatarImage src={row.original.photo} alt="@shadcn" />
        </Avatar>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "verified",
    header: "Verified",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
