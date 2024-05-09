import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import Chip from "@mui/material/Chip";
import Image from "next/image";
export default function RoomList() {
  return (
    <Card className="w-full border-none grid grid-cols-3 mt-10 gap-3">
      <Card className="h-[300px]">
        <CardHeader>
          {/* <CardTitle>Match Class By Teacher Luan</CardTitle> */}
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center glassmorphism size-12 rounded-[10px]">
                <Image
                  src="/upcoming.svg"
                  alt="meeting"
                  width={27}
                  height={27}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Room - Match Class</span>
                <span className="text-sm text-gray-500">By Teacher Luan</span>
              </div>
            </div>
            <Chip label="Happenning" color="primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex mb-4 items-center justify-between">
            <span className="flex items-center rounded-md bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-500">
              Progress
            </span>
            <span className="flex items-center rounded-md border border-red-400 bg-white px-2 py-1 text-xs font-semibold  text-red-400">
              Active
            </span>
          </div>
          <div className="m-auto block">
            <div>
              <span className="inline-block text-sm ">
                Process :<span className="font-bold text-red-400">25</span>
                /50
              </span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
              <div className="h-full w-1/2 rounded-full bg-purple-500 text-center text-xs text-white" />
            </div>
          </div>
          <div className="my-4 flex items-center justify-start space-x-4">
            <span className="flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-semibold text-green-500">
              IOS APP
            </span>
            <span className="flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-500">
              UI/UX
            </span>
          </div>
          <div className="flex -space-x-2 pt-3">
            <Image
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
              src="/components.jpeg"
              alt="Guy"
              width={40}
              height={40}
            />

            <Image
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
              src="/golang2.png"
              alt="Max"
              width={40}
              height={40}
            />
          </div>
        </CardContent>
      </Card>
    </Card>
  );
}
