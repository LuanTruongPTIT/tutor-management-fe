"use client";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Student, User } from "@/constants/data";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<Student>[] = [
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
    accessorKey: "name",
    header: "NAME",
  },
  {
    accessorKey: "school",
    header: "SCHOOL",
  },
  {
    accessorKey: "role",
    header: "ROLE",
  },
  {
    accessorKey: "status",
    header: "STATUS",
  },
  {
    accessorKey: "code",
    header: "CODE",
  },
  {
    accessorKey: "class",
    header: "CLASS",
  },
  {
    accessorKey: "mother",
    header: "MOTHER",
  },
  {
    accessorKey: "Gender",
    header: "GENDER",
  },
  {
    accessorKey: "phone",
    header: "PHONE",
  },
  {
    accessorKey: "address",
    header: "ADDRESS",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
