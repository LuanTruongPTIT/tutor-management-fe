"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
export default function CategorySearch() {
  return (
    <div className="mb-10 items-center px-5 flex flex-col gap-2">
      <h2
        className="font-bold
        text-4xl tracking-wide"
      >
        Search <span className="text-[#fe9fc3]">Tutor</span>
      </h2>
      <h2 className="text-gray-500 text-xl">
        Search Your Tutor and Book Appointment in one click
      </h2>

      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
      <div className="grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6 "></div>
    </div>
  );
}
