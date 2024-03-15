import React from "react";

function Authlayout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" bg-[#ff7aac] h-full flex items-center justify-center">
      {children}
    </div>
  );
}

export default Authlayout;
