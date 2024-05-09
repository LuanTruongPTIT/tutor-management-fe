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

export default function CardDetailTutor() {
  return (
    <Tabs defaultValue="info" className="">
      <TabsList className="w-[300px] grid grid-cols-2">
        <TabsTrigger value="info">General Info</TabsTrigger>
        <TabsTrigger value="password">Tutor&apos;s Categories</TabsTrigger>
      </TabsList>
      <TabsContent
        value="info"
        className="w-full justify-center flex flex-cols"
      >
        <Card className="w-[300px] my-5">
          <CardHeader>
            <CardTitle>About tutor Luan Truong</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center flex-col space-y-2">
            <Avatar className="h-[100px] w-[100px]">
              <AvatarImage src="/components.jpeg" alt="@shadcn" width={300} />
            </Avatar>
            <span>@luantruong</span>
            <span className="text-gray-500">tutor</span>
            <Separator />
          </CardContent>
          <CardContent>
            <div className="pb-7">
              <h2 className="text-sm leading-6">Address</h2>
              <span className="text-sm text-gray-500">
                17no9 Thành phố Thủ Đức{" "}
              </span>
            </div>
            <div className="pb-7">
              <h2 className="text-sm leading-6">Address</h2>
              <span className="text-sm text-gray-500">
                17no9 Thành phố Thủ Đức{" "}
              </span>
            </div>
            <div className="pb-10">
              <h2 className="text-sm leading-6">Address</h2>
              <span className="text-sm text-gray-500">
                17no9 Thành phố Thủ Đức{" "}
              </span>
            </div>
            <Separator />
            <div className="pt-5">
              <h2 className="text-sm leading-6">Created / joined at</h2>
              <span className="text-sm text-gray-500 ">Jan 28, 2021</span>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[900px] p-10 my-5 ml-5">
          <div className="grid grid-cols-2 gap-4 pb-6">
            <div className="grid gap-2">
              <Label htmlFor="fullname">
                FullName<span className="text-red-500">(*)</span>
              </Label>
              <Input value="Truong Dinh Kim Luan" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username">
                UserName<span className="text-red-500">(*)</span>
              </Label>
              <Input value="@luantruong" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pb-6">
            <div className="grid gap-2">
              <Label htmlFor="email">
                Email<span className="text-red-500">(*)</span>
              </Label>
              <Input disabled={true} value="luan@gmail.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="university">University</Label>
              <Input value="" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pb-6">
            <div className="grid gap-2">
              <Label htmlFor="degree">Degree</Label>
              <Input value="" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="experience">Experience</Label>
              <Input value="1 month" />
            </div>
          </div>
          <div className="flex flex-row gap-1 pb-8">
            <Tags />
            <Link href="https://api.pinlearn.info/documents/k-t-qu--h-c-t-p---c-ng-th-ng-tin---o-t-o-E0o04.pdf">
              <h2 className="italic"> Cert Document </h2>
            </Link>
          </div>
          <Separator />
          <div className="flex flex-cols pt-3">
            <NextItemTabs />
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <div>luantruong</div>
      </TabsContent>
    </Tabs>
  );
}
