"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function CalendarStudent() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex items-center flex-row gap-10 justify-center">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border-none border"
      />
      <div className="flex flex-col justify-start gap-6 w-[300px] h-[261px]">
        <h2 className="font-semibold ">Schedule for Aprial 24,2024</h2>
        <div className="flex gap-8 flex-row">
          <Avatar>
            <AvatarImage src="/golang2.png" alt="@shadcn" />
          </Avatar>
          <div className="flex flex-col gap-2 leading-6 ">
            <span className="text-sm">Math - Teach by Luan</span>
            <p className="text-xs">1.00PM - 2.30PM</p>
          </div>
        </div>
        <div className="flex gap-8 flex-row">
          <Avatar>
            <AvatarImage src="/golang2.png" alt="@shadcn" />
          </Avatar>
          <div className="flex flex-col gap-2 leading-6 text-sm">
            <span className="">Math - Teach by Luan</span>
            <p className="text-xs">1.00PM - 2.30PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
