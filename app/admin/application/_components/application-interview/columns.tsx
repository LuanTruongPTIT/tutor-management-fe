"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ApplicationInterview } from "./application-interview";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/table/data-table-column-header";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { statuses } from "../../schema/data";
import { CrossCircledIcon, StopwatchIcon } from "@radix-ui/react-icons";
import {
  BookX,
  CameraIcon,
  CircleEllipsis,
  ThumbsUp,
  UserIcon,
} from "lucide-react";
import { Button } from "@nextui-org/react";
import { DataTableRowActionsInterview } from "./data-table-row-action-interview";
import SelectStatus from "./select-status";

export const statuses_interview = [
  {
    value: "complete",
    label: "Complete",
    icon: CircleEllipsis,
  },
  {
    value: "interview",
    label: "Interview",
    icon: StopwatchIcon,
  },
  {
    value: "approved",
    label: "Approved",
    icon: ThumbsUp,
  },
  {
    value: "rejected",
    label: "Rejected",
    icon: BookX,
  },
];
export const columns_interview: ColumnDef<ApplicationInterview>[] = [
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
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="id" />
    ),
    cell: ({ row }) => <div className="w-[20px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
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
      return (
        <div className="flex space-x-2">
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
      const status = statuses_interview.find(
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
    accessorKey: "in_stage",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="In Stage" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("in_stage")}
          </span>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Actions"
        className="pl-[5px]"
      />
    ),
    cell: ({ row }) => {
      return <SelectStatus row={row} />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActionsInterview row={row} status={statuses_interview} />
    ),
  },
];
