import Breadcrumb from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import RoomList from "./component/room-list";

const breadcrumbItems = [{ title: "Room", link: "/admin/room" }];
export default function Page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <Breadcrumb items={breadcrumbItems} />
        <RoomList />
      </div>
    </>
  );
}
