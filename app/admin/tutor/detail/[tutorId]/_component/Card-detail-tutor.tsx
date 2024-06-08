import { Separator } from "@/components/ui/separator";
import { AboutTutor } from "./About-tutor";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@/components/registry/new-york/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Tags } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import NextItemTabs from "@/components/material/next-item";
import TableTutorCourseClass from "./table-course";
import StepSchedule from "./step-schedule";
import { TutorCourseClass } from "@/schema";

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  );
}
interface CardDetailTutorProps {
  data: any;
}
export default function CardDetailTutor({ data }: any) {
  console.log("data", data);
  const class_tutor =
    data?.class_tutor && (data.class_tutor as TutorCourseClass[]);
  const joined =
    data?.createdAt &&
    new Date(data.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  const schedules: any[] = [];
  class_tutor &&
    Promise.all(
      class_tutor.map(async (item_class) => {
        item_class.schedule &&
          item_class.schedule.map((item) => {
            console.log("item", item);
            const item_plain = {
              ...item,
              class_name: item_class.room,
              students: item_class.students,
            };
            schedules.push(item_plain);
          });
      })
    );
  const schedule_sort = schedules.sort((a, b) => {
    return new Date(a.start_date).getTime() - new Date(b.start_date).getTime();
  });
  console.log("schedule_sort", schedule_sort);
  return (
    <Tabs defaultValue="info" className="w-full">
      <TabsList className="w-[300px] grid grid-cols-2">
        <TabsTrigger value="info">General Info</TabsTrigger>
        <TabsTrigger value="password">Tutor&apos;s Categories</TabsTrigger>
      </TabsList>
      <TabsContent
        value="info"
        className="w-full justify-around flex flex-row px-7"
      >
        <Card className="w-[400px] my-5 max-h-[700px]">
          <CardHeader>
            <CardTitle>About tutor Luan Truong</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center flex-col space-y-2">
            <Avatar className="h-[100px] w-[100px]">
              <AvatarImage
                src={data?.imagePhoto && data.imagePhoto}
                alt="@shadcn"
                width={300}
              />
            </Avatar>
            <span>{data?.fullName ? data.fullName : ""}</span>
            <span className="text-gray-500">tutor</span>
          </CardContent>
          <div className="flex w-[90%] flex-col justify-center space-y-2 gap-4">
            <h2 className="pl-5">Details</h2>
            <Separator className="ml-5" />
          </div>

          <CardContent className="pt-7">
            <div className="pb-7 space-y-2 flex flex-col gap-y-2 items-start">
              <div className="flex items-center flex-row gap-2">
                <h2 className="text-sm leading-6">Email:</h2>
                <span className="text-sm text-gray-500">
                  {data?.email ? data.email : ""}
                </span>
              </div>
              <div className="flex items-center flex-row gap-2">
                <h2 className="text-sm leading-6">Phone:</h2>
                <span className="text-sm text-gray-500">
                  {data?.phone_number ? data.phone_number : "N/A"}
                </span>
              </div>
              <div className="flex items-center flex-row gap-2">
                <h2 className="text-sm leading-6">Address:</h2>
                <span className="text-sm text-gray-500">
                  {data?.address ? data.address : ""}
                </span>
              </div>
              <div className="flex items-center flex-row gap-2">
                <h2 className="text-sm leading-6">Country:</h2>
                <span className="text-sm text-gray-500">
                  {data?.country ? data.country : ""}
                </span>
              </div>
              <div className="flex items-center flex-row gap-2">
                <h2 className="text-sm leading-6">Status:</h2>
                <span className="text-sm text-gray-500">
                  {data?.status ? data.status : ""}
                </span>
              </div>
              <div className="flex items-center flex-row gap-2">
                <h2 className="text-sm leading-6">Role:</h2>
                <span className="text-sm text-gray-500">Tutor</span>
              </div>
            </div>

            <Separator />
            <div className="pt-5">
              <h2 className="text-sm leading-6">Created / joined at</h2>
              <span className="text-sm text-gray-500 ">{joined}</span>
            </div>
          </CardContent>
        </Card>
        <div>
          <Card className="flex flex-col justify-start p-6 my-5 ml-5">
            <CardTitle>Background</CardTitle>
            {/* </CardHeader> */}
            <CardContent className="pt-[20px]">
              <div className="flex flex-cols pt-3">
                <NextItemTabs data={data?.activities ? data.activities : []} />
              </div>
            </CardContent>
          </Card>
          <Card className="w-[900px] p-6 my-5 ml-5">
            {/* <CardHeader> */}
            <CardTitle>Class</CardTitle>
            {/* </CardHeader> */}

            <div className="flex flex-col justify-start w-full">
              <TableTutorCourseClass data={class_tutor ? class_tutor : []} />
            </div>
          </Card>
          <Card className="w-[900px] flex flex-col justify-start p-6 my-5 ml-5">
            {/* <CardHeader> */}
            <CardTitle>User Activity Timeline</CardTitle>
            {/* </CardHeader> */}
            <CardContent className="pt-[40px]">
              <StepSchedule data={schedule_sort} />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div>luantruong</div>
      </TabsContent>
    </Tabs>
  );
}
