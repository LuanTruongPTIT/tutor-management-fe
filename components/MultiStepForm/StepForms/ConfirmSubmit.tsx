import { useEffect, useState, useTransition } from "react";
import { useAppSelector } from "@/redux/store";
import NavButtons from "../NavButton";
import { Toast } from "@/components/ui/toast";
import { BeatLoader } from "react-spinners";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RegisterTutor } from "@/modules/user/user.service";
import { useMutation } from "@tanstack/react-query";
import { tutorApiRequest } from "@/apiRequest/tutor";
import Image from "next/image";

export default function ConfirmSubmit() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const [isPending, startTransition] = useTransition();
  const result: Record<string, any> = useAppSelector(
    (data) => data.onboarding.formData
  );
  useEffect(() => {
    const fetchData = async (result: any) => {
      try {
        setIsLoading(true);
        const data = await tutorApiRequest.RegisterTutor(result);
        console.log(data);
        startTransition(() => {
          if (data.status === 200) {
            setTimeout(() => {
              setIsSuccess(true);
              setIsLoading(false);
              setHasFetchedData(true);
            }, 2000);
          }
          if (data.status === 400) {
            toast.error(data.message, { duration: 5000 });
          }
        });
      } catch (error) {
        toast.error(String(error));
      }
    };

    if (!hasFetchedData) {
      fetchData(result);
    }
  }, [hasFetchedData, result]);
  return (
    <div className="h-[550px]">
      {isLoading && (
        <div className="h-full w-full flex flex-col items-center justify-center ">
          <BeatLoader />
          <h2>Waiting... App is handling your request</h2>
        </div>
      )}
      {isSuccess && (
        <div className="h-full w-full flex flex-col items-center justify-center gap-[20px]">
          <div className="flex flex-col items-center">
            <Image
              src={"/images/icons/icon-thank-you.svg"}
              alt="Thank you icon"
              width={56}
              height={56}
            />

            <strong className="mt-6 text-2xl	text-denim font-bold">
              Thank you!
            </strong>

            <p className="mt-2 text-base text-grey font-normal leading-6 tracking-[0.5px] text-center">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at admin.preply@gmail.com.
            </p>
          </div>
          <Button>
            <Link href="/">Back to home page</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
