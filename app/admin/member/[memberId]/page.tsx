import BreadCrumb from "@/components/ui/breadcrumb";
import { MemberForm } from "./_components/member-form";

export default function Page() {
  const breadCrumbItems = [
    { title: "Member", link: "/admin/member" },
    { title: "Create", link: "/admin/member/create" },
  ];
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadCrumbItems} />
      <MemberForm initialData={null} />
    </div>
  );
}
