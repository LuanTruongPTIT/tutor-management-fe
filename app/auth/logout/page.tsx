"use client";

import { getAccessToken } from "@/lib/utils/auth.utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useTransition } from "react";
import { BeatLoader } from "react-spinners";

export default function Logout() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const accesstoken = searchParams.get("accesstoken");
  const accesstokenCookie = getAccessToken();
  console.log(accesstoken, accesstokenCookie);
  const [isPending, startTransition] = useTransition();
  // if (accesstoken) {
  //   router.push("/auth/login");
  // }
  // const logout = async () => {
  //   try {
  //     await startTransition(() => {
  //       fetch("http://localhost:8001/api/auth/logout", {
  //         method: "POST",
  //         credentials: "include",
  //       });
  //     });
  //     router.push("/auth/login");
  //   } catch (error) {
  //     console.error("Error logging out:", error);
  //   }
  // };
  // useEffect(() => {
  //   logout();
  // }, []);
  return (
    <div className="flex items-center justify-center h-screen">
      <BeatLoader color="#2563EB" />
    </div>
  );
}
