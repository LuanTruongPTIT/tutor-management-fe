"use client";

import { ChevronDownIcon } from "@radix-ui/react-icons";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/registry/new-york/ui/avatar";
import { Button } from "@/components/registry/new-york/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/registry/new-york/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/registry/new-york/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/registry/new-york/ui/popover";

export function AboutNotiStudent() {
  return (
    <Card>
      <CardContent className="grid gap-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-10 justify-between mt-[10px] items-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/01.png" alt="Image" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-end">
              <p className="text-sm font-medium leading-none">Events</p>
              <p className="text-sm  text-muted-foreground">12</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
