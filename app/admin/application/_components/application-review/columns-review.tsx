"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/table/data-table-column-header";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import SheetDemo from "../sheet-application";
import { Application } from "../../schema/application";
import { CrossCircledIcon, StopwatchIcon } from "@radix-ui/react-icons";
import { DataTableRowActionsReview } from "./data-table-row-action-review";

export const statuses_review = [
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },

  {
    value: "rejected",
    label: "Rejected",
    icon: CrossCircledIcon,
  },
  {
    value: "interview",
    label: "Interview",
    icon: CrossCircledIcon,
  },
];
export const columns_review: ColumnDef<Application>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // {
  //   accessorKey: "index",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="id" />
  //   ),
  //   cell: ({ row }) => <div className="w-[20px]">{row.getValue("index")}</div>,
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "logo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Logo" />
    ),
    cell: ({ row }) => {
      return (
        <Avatar>
          <AvatarImage src={row.original.logo} alt="@shadcn" />
        </Avatar>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label);

      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "position",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Position" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("position")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses_review.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Applied" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("createdAt")}
          </span>
        </div>
      );
    },
  },
  {
    id: "detail",
    cell: ({ row }) => (
      <DataTableRowActionsReview row={row} status={statuses_review} />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <SheetDemo id={row.original.id} />,
  },
];
