import Header from "@/components/header/Header";
import React from "react";

function Authlayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className=" h-full flex items-center justify-center">{children}</div>
    </>
  );
}

export default Authlayout;
