"use client";
import React, { Suspense } from "react";

import BreadCrumb from "@/components/ui/breadcrumb";
import Applications from "./_components/application";
import Loading from "@/app/loading";

export default function Page() {
  // return (

  // );
  const breadCrumbItems = [
    { title: "Application", link: "/admin/test" },
    // { title: "Detail", link: "/admin/student/detail" },
  ];
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex h-full flex-col flex-1 space-y-8 p-8 md:flex">
          <BreadCrumb items={breadCrumbItems} />
          {/* <CardDetailStudent /> */}
          <Applications />
        </div>
      </Suspense>
    </>
  );
}
