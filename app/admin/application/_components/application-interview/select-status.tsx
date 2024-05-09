"use client";
import { tutorApiRequest } from "@/apiRequest/tutor";
import { Button } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Row } from "@tanstack/react-table";
import { BookX, ThumbsUp } from "lucide-react";
import {
  ApplicationInterview,
  ApplicationInterviewSchema,
} from "./application-interview";
import { toast } from "sonner";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}
export default function SelectStatus<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const queryClient = useQueryClient();
  const application = ApplicationInterviewSchema.parse(row.original);
  const onUpdateSuccess = async (tutorApplication: ApplicationInterview) => {
    await queryClient.setQueryData(
      ["applications-interview"],
      (oldData?: ApplicationInterview[]) => {
        if (oldData) {
          return oldData.map((data) =>
            data.id === tutorApplication.id ? tutorApplication : data
          );
        }
      }
    );
    toast.success("Update status successfully");
  };
  const updateMutation = useMutation({
    mutationFn: ({ id, status }: { id: number; status: string }) =>
      tutorApiRequest.UpdateStatusApplicationInterview({
        status: status,
        id: id,
      }),
    onSuccess: onUpdateSuccess,
    // onError: onRequestError,
    retry: 2,
  });
  async function processStatus(value: string) {
    updateMutation.mutate({ id: application.id, status: value });
  }

  return (
    <div className="flex gap-4 items-center w-300px]">
      <Button
        color="success"
        className="h-[30px] text-sm"
        variant="bordered"
        startContent={<ThumbsUp />}
        onClick={() => processStatus("approved")}
      >
        Approve
      </Button>
      <Button
        color="danger"
        className="h-[30px] text-sm"
        variant="bordered"
        startContent={<BookX />}
        onClick={() => processStatus("rejected")}
      >
        Reject
      </Button>
    </div>
  );
}
