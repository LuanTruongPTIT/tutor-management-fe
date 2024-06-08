"use client";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Student, Tutor, User } from "@/constants/data";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Chip } from "@nextui-org/chip";
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
    accessorKey: "imagePhoto",
    header: "Photo",
    cell: ({ row }) => {
      return (
        <Avatar>
          <AvatarImage src={row.original.imagePhoto} alt="@shadcn" />
        </Avatar>
      );
    },
  },
  {
    accessorKey: "fullName",
    header: "Name",
  },
  {
    accessorKey: "phone_number",
    header: "Phone Number",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "city",
    header: "City",
  },

  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      // console.log(row.original.status);
      return (
        <span className="flex space-x-2">
          {row.original.status === "active" && (
            <Chip color="success" variant="bordered">
              {row.original.status}
            </Chip>
          )}
          {row.original.status === "inactive" && (
            <Chip color="warning" variant="bordered">
              {row.original.status}
            </Chip>
          )}
          {row.original.status === "blocked" && (
            <Chip color="danger" variant="bordered">
              {row.original.status}
            </Chip>
          )}
        </span>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
