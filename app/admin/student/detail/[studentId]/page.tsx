import BreadCrumb from "@/components/ui/breadcrumb";
import CardDetailStudent from "./_component/Card-detail-student";

export default function Page() {
  const breadCrumbItems = [
    { title: "Student", link: "/admin/student" },
    { title: "Detail", link: "/admin/student/detail" },
  ];
  return (
    <div className="flex flex-col space-y-4 p-8">
      <BreadCrumb items={breadCrumbItems} />
      <CardDetailStudent />
    </div>
  );
}
