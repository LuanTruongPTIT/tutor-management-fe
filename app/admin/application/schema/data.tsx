import { CrossCircledIcon, StopwatchIcon } from "@radix-ui/react-icons";
import { CircleEllipsis, Presentation, TicketPlus } from "lucide-react";

export const statuses = [
  {
    value: "pending",
    label: "Pending",
    icon: CircleEllipsis,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
];
export const statusUpdate = [
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "approved",
    label: "Approved",
  },
  {
    value: "rejected",
    label: "Rejected",
  },
];
