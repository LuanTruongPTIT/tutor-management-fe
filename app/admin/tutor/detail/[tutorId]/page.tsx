import Breadcrumb from "@/components/ui/breadcrumb";
import CardDetailTutor from "./_component/Card-detail-tutor";

export default function page() {
  const breadcrumbItems = [
    { title: "Tutor", link: "/admin/tutor" },
    { title: "Detail", link: "/admin/tutor/detail" },
  ];
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <Breadcrumb items={breadcrumbItems} />
        {/* <UserClient data={users} /> */}
        <CardDetailTutor />
      </div>
    </>
  );
}
