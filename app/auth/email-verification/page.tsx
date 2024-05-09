"use client";
import CardWrapper from "@/components/auth/card-wrapper";
import { FormSuccess } from "@/components/form-success";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const [isVerified, setIsVerified] = useState(false);
  const [searched, setSearched] = useState(false);
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const search = searchParams.get("token") as string;

  const verifyToken = async (token: string) => {
    try {
      const result = await fetch(
        "http://localhost:8001/api/auth/email-verification",
        {
          method: "POST",
          body: JSON.stringify({ token }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      if (result.status === 200) {
        setIsVerified(true);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error verifying token:", error);
    }
  };

  useEffect(() => {
    const verifyEmail = async () => {
      if (search && !isVerified) {
        await verifyToken(search);
      }
    };

    startTransition(() => {
      setSearched(true);
      verifyEmail();
    });
  }, [search, isVerified, startTransition]);
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: [search],
  //   queryFn: () => fetchToken(search),
  // });

  // useEffect(() => {
  //   if (data) {
  //     setIsVerified(true);
  //   }
  // }, [data]);
  return (
    <CardWrapper
      headerLabel="Confirm your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex items-center w-full justify-center">
        {!isVerified ? (
          <BeatLoader />
        ) : (
          <FormSuccess message={`Confirm email success!`} />
        )}
      </div>
    </CardWrapper>
  );
}
