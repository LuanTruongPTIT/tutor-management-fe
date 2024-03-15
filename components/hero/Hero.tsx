import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function Hero() {
  return (
    <section className="bg-[#ff7aac]">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="image"
              src="/panel.jpg"
              className="absolute inset-0 h-full w-full object-cover"
              width={446}
              height={325}
            />
          </div>

          <div className="flex flex-wrap m-0 flex-col gap-[48px]">
            <div className="max-w-[560px]">
              <h1 className="text-[#121117] text-[54px] font-[700] leading-[68px] tracking-[-0.005em]">
                Unlock your potential
                <br /> with the best
                <br /> language tutors.
              </h1>
            </div>

            {/* <div className="pt-7">
              <Button size={"lg"}>Get Started Today</Button>
            </div> */}
            <div className="max-w-[320px] h-[56px]">
              <a
                href="#"
                className="rounded-lg px-[32px] py-[13px] text-[18px] flex items-center w-full justify-centers text-[#fff] bg-[#121117] cursor-pointer"
              >
                <span className="w-full inline-flex items-center justify-centers">
                  Get started
                  <span className="text-[18px] align-text-top inline-block max-w-[24px] w-[24px] h-[24px] tracking-[0.005em]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.086 10.993h-12v2h12l-5.293 5.293 1.414 1.414 7.707-7.707-7.707-7.707L10.793 5.7l5.293 5.293Zm1 1Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
