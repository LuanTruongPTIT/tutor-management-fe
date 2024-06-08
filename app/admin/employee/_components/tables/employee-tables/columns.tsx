"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Employee } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export const columns: ColumnDef<Employee>[] = [
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
    accessorKey: "fullName",
    header: "Name",
    // cell: ({ row }) => {
    //   // const label = labels.find((label) => label.value === row.original.label);

    //   return (
    //     <div className="flex space-x-2">
    //       {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
    //       <span className="max-w-[100px] truncate font-medium">
    //         {row.getValue("fullName")}
    //       </span>
    //     </div>
    //   );
    // },
  },

  {
    accessorKey: "email",
    header: "Email",
    // cell: ({ row }) => {
    //   // const label = labels.find((label) => label.value === row.original.label);

    //   return (
    //     <div className="flex space-x-2">
    //       <span className="w-[200px] truncate font-medium">
    //         {row.getValue("email")}
    //       </span>
    //     </div>
    //   );
    // },
  },
  {
    accessorKey: "role",
    header: "Role",
    // cell: ({ row }) => {
    //   return (
    //     <span className="max-w-[100px] truncate font-medium">
    //       {row.getValue("role")}
    //     </span>
    //   );
    // },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <span className="max-w-[100px] truncate font-medium">
          {row.getValue("status")}
        </span>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    // cell: ({ row }) => {
    //   return (
    //     <span className="max-w-[50px] truncate font-medium">
    //       {new Date(row.getValue("createdAt")).toLocaleDateString()}
    //     </span>
    //   );
    // },
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
