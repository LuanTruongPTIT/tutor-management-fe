"use client";

import {
  CrossCircledIcon,
  DotsHorizontalIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { tutorApiRequest } from "@/apiRequest/tutor";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Application, applicationSchema } from "../../schema/application";

interface status {
  value: string;
  label: string;
  icon: any;
}
interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  status: status[];
}
export function DataTableRowActionsReview<TData>({
  row,
  status,
}: DataTableRowActionsProps<TData>) {
  const queryClient = useQueryClient();
  const application = applicationSchema.parse(row.original);
  const onRequestError = () => {
    toast.error("Update status failed");
  };

  const onUpdateSuccess = async (tutorApplication: Application) => {
    await queryClient.setQueryData(
      ["applications-review"],
      (oldData?: Application[]) => {
        if (oldData) {
          console.log(tutorApplication);
          if (tutorApplication.status !== "interview") {
            const dataOldAfterFilter = oldData.filter(
              (data) => data.id !== tutorApplication.id
            );
            tutorApplication.index = 0;
            dataOldAfterFilter.push(tutorApplication);
            return dataOldAfterFilter;
          }
          if (tutorApplication.status === "interview") {
            const dataOldAfterFilter = oldData.filter(
              (data) => data.id !== tutorApplication.id
            );
            return dataOldAfterFilter;
          }
        }
      }
    );
    toast.success("Update status successfully");
  };
  const updateMutation = useMutation({
    mutationFn: ({ id, status }: { id: number; status: string }) =>
      tutorApiRequest.updateStatusApplication({
        status: status,
        id: id,
      }),
    onSuccess: onUpdateSuccess,
    onError: onRequestError,
    retry: 2,
  });
  async function processStatus(value: string) {
    updateMutation.mutate({ id: application.id, status: value });
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={application.status}>
              {status.map((status) => (
                <DropdownMenuRadioItem
                  onClick={() => processStatus(status.value)}
                  key={status.value}
                  value={status.value}
                >
                  {status.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
