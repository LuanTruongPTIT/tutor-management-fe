"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
      <div className="grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6 ">
        <Link
          href={"/"}
          key={1}
          className="flex 
          flex-col text-center items-center
          p-5 bg-pink-200 m-2 rounded-lg cursor-pointer
          gap-2 hover:scale-110 transition-all ease-in-out"
        >
          <Image src="/mathematics.png" alt="icon" width={40} height={40} />
          <label className="text-sm">Math</label>
        </Link>
        <Link
          href={"/"}
          key={1}
          className="flex 
          flex-col text-center items-center
          p-5 bg-pink-200 m-2 rounded-lg cursor-pointer
          gap-2 hover:scale-110 transition-all ease-in-out"
        >
          <Image src="/mathematics.png" alt="icon" width={40} height={40} />
          <label className=" text-sm">Math</label>
        </Link>
        <Link
          href={"/"}
          key={1}
          className="flex 
          flex-col text-center items-center
          p-5 bg-pink-200 m-2 rounded-lg cursor-pointer
          gap-2 hover:scale-110 transition-all ease-in-out"
        >
          <Image src="/mathematics.png" alt="icon" width={40} height={40} />
          <label className=" text-sm">Math</label>
        </Link>
        <Link
          href={"/"}
          key={1}
          className="flex 
          flex-col text-center items-center
          p-5 bg-pink-200 m-2 rounded-lg cursor-pointer
          gap-2 hover:scale-110 transition-all ease-in-out"
        >
          <Image src="/mathematics.png" alt="icon" width={40} height={40} />
          <label className=" text-sm">Math</label>
        </Link>
        <Link
          href={"/"}
          key={1}
          className="flex 
          flex-col text-center items-center
          p-5 bg-pink-200 m-2 rounded-lg cursor-pointer
          gap-2 hover:scale-110 transition-all ease-in-out"
        >
          <Image src="/mathematics.png" alt="icon" width={40} height={40} />
          <label className=" text-sm">Math</label>
        </Link>
        <Link
          href={"/"}
          key={1}
          className="flex 
          flex-col text-center items-center
          p-5 bg-pink-200 m-2 rounded-lg cursor-pointer
          gap-2 hover:scale-110 transition-all ease-in-out"
        >
          <Image src="/mathematics.png" alt="icon" width={40} height={40} />
          <label className="text-sm">Math</label>
        </Link>
      </div>
    </div>
  );
}
