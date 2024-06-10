import Breadcrumb from "@/components/ui/breadcrumb";

import { Heading } from "@/components/ui/heading";
import CreateStudent from "./_component/create-student";
import { Suspense } from "react";

const breadcrumbItems = [{ title: "New Student", link: "/admin/student" }];
export default function page() {
  return (
    <>
      <Suspense fallback={<p>Loading feed...</p>}>
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
          <Breadcrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <Heading
              title="Create student"
              description="Create a new student."
            />
          </div>
          <CreateStudent />
        </div>
      </Suspense>
    </>
  );
}
