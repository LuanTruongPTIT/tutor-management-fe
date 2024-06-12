"use client";
import { CellContext, ColumnDef } from "@tanstack/react-table";
// import { CellAction } from "./cell-action";
import { Course, Student, Tutor, User } from "@/constants/data";
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
export const columnCourse: ColumnDef<Course>[] = [
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
    accessorKey: "title",
    header: "Name",
  },
  {
    accessorKey: "tutor",
    header: "Teacher",
  },
  {
    accessorKey: "fee",
    header: "Fee",
  },

  {
    accessorKey: "createAt",
    header: "Created Date",
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      // console.log(row.original.status);
      return (
        <span className="flex space-x-2">
          {
            <Chip color="success" variant="bordered">
              Active
            </Chip>
          }
        </span>
      );
    },
  },
];
