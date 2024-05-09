import { cn } from "@/lib/utils";
import { AboutStudent } from "./About-student";
import { AboutNotiStudent } from "./About-noti-student";
import { Separator } from "@/components/ui/separator";
import { UserClient } from "@/components/tables/user-tables/client";
import { StudentsCourses, users } from "@/constants/data";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./Column-student-detail";
import { CalendarStudent } from "./Calendar.student";
import { ChartCard } from "@/app/admin/_components/ChartCard";
import { RevenueByAttendanceChart } from "@/app/admin/_components/RevenueByAttendanceChart";
import { getRangeOption, RANGE_OPTIONS } from "@/lib/rangeOptions";

export const productData = {
  chartData: [
    { name: "Present", count: 100 },
    { name: "Absent", count: 30 },
  ],
};
function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center justify-center", className)}
      {...props}
    />
  );
}
//  [&>div]:w-full
export default function CardDetailStudent() {
  const revenueByAttendanceRangeOption = RANGE_OPTIONS.all_time;
  return (
    <div className=" max-w-full  justify-center gap-14 rounded-lg p-8 flex flex-row">
      <div className="col-span-2 grid items-start gap-2 lg:col-span-1">
        <DemoContainer>
          <AboutStudent />
        </DemoContainer>
      </div>
      <div className="flex flex-col gap-10 w-full">
        <DemoContainer className="gap-10 flex-row w-[900px] ">
          {/* <AboutNotiStudent />
          <AboutNotiStudent />
          <AboutNotiStudent /> */}
          <CalendarStudent />
          <ChartCard
            title="Attendence"
            queryKey="revenueByProductRange"
            selectedRangeLabel={revenueByAttendanceRangeOption.label}
          >
            <RevenueByAttendanceChart data={productData.chartData} />
          </ChartCard>
        </DemoContainer>
        <Separator />
        <DataTable
          searchKey="subject"
          columns={columns}
          data={StudentsCourses}
        />
      </div>
    </div>
  );
}
