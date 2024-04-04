import { StudentClient } from "@/components/tables/student-tables/client";
import { UserClient } from "@/components/tables/user-tables/client";
import Breadcrumb from "@/components/ui/breadcrumb";

import { students } from "@/constants/data";
const breadcrumbItems = [{ title: "Tutor", link: "/dashboard/user" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <Breadcrumb items={breadcrumbItems} />
        <StudentClient data={students} />
      </div>
    </>
  );
}
