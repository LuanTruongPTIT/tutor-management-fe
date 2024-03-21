import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function PageTeach() {
  return (
    <div className="w-full">
      <div className="py-[64px] px-0 items-center flex flex-wrap m-0">
        <div className="w-3/5 gap-[50px] flex flex-col">
          <h1 className="text-[48px] font-semibold leading-[52px] tracking-normal text-[#121117]">
            Make a living by teaching the largest community of learners
            worldwide
          </h1>
          <div className="flex-row gap-[48px] flex justify-between relative">
            <div className="flex-col items-start flex gap-[16px]">
              <div className="bg-[#121117] flex w-[48px] h-[48px] items-center justify-center rounded">
                <h4 className="text-[#fff] font-medium tracking-[0.0125em] leading-8	 ">
                  1
                </h4>
              </div>
              <div className="flex flex-col px-0 py-0 flex-wrap">
                <h4 className="text-[24px] font-medium tracking-[0.0125em] leading-8 m-0">
                  Sign up
                </h4>
                <p className="text-[#121117] text-[14px] font-normal tracking-[0.005em] leading-5">
                  to create your tutor profile
                </p>
              </div>
            </div>
            <div className="flex-col items-start flex gap-[16px]">
              <div className="bg-[#121117] flex w-[48px] h-[48px] items-center justify-center rounded">
                <h4 className="text-[#fff] font-medium tracking-[0.0125em] leading-8	 ">
                  2
                </h4>
              </div>
              <div className="flex flex-col px-0 py-0 flex-wrap">
                <h4 className="text-[24px] font-medium tracking-[0.0125em] leading-8 m-0">
                  Get approved
                </h4>
                <p className="text-[#121117] text-[14px] font-normal tracking-[0.005em] leading-5">
                  by our team in 5 business days
                </p>
              </div>
            </div>
            <div className="flex-col items-start flex gap-[16px]">
              <div className="bg-[#121117] flex w-[48px] h-[48px] items-center justify-center rounded">
                <h4 className="text-[#fff] font-medium tracking-[0.0125em] leading-8	 ">
                  3
                </h4>
              </div>
              <div className="flex flex-col px-0 py-0 flex-wrap">
                <h4 className="text-[24px] font-medium tracking-[0.0125em] leading-8 m-0">
                  Start earning
                </h4>
                <p className="text-[#121117] text-[14px] font-normal tracking-[0.005em] leading-5">
                  by teaching students all over the world!
                </p>
              </div>
            </div>
            <div className="left-0 top-[24px] h-[2px] absolute right-0 bg-[#ebebf1] z-negative z-[-1] w-[500px]"></div>
          </div>
          <div className="flex px-0 py-0 flex-row">
            <Button size="lg" variant="default" className="p-6">
              Create a tutor profile now
            </Button>
          </div>
        </div>
        <div className="flex max-w-[600px] w-[40%] text-right">
          <div className="pl-[60px]">
            <Image
              src="/components.jpeg"
              alt="image"
              width={500}
              height={300}
            />
            {/* <Image
              src="/components.jpeg"
              alt="image"
              width={279}
              height={326}
            />
            <Image
              src="/components.jpeg"
              alt="image"
              width={349}
              height={408}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
