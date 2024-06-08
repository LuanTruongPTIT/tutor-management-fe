import Breadcrumb from "@/components/ui/breadcrumb";
import CreateTutor from "./_components/create-tutor";
import { Heading } from "@/components/ui/heading";

const breadcrumbItems = [{ title: "New Tutor", link: "/admin/tutor" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading title="Create tutor" description="Create a new tutor." />
        </div>
        <CreateTutor />
      </div>
    </>
  );
}
