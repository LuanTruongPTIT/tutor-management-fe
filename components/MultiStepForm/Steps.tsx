"use client";
import React from "react";
import { useSelector } from "react-redux";
import Step from "./Step";
export interface IStep {
  number: number;
  title: string;
}
export default function Steps({ steps }: { steps: IStep[] }) {
  // const { number, title } = step;
  return (
    <div className="rounded-lg col-span-full md:col-span-4 bg-[#fe9fc3] p-10 flex flex-row justify-between md:flex-col md:justify-start gap-6 flex-wrap ">
      {steps.map((step, i) => {
        return <Step key={i} step={step} />;
      })}
    </div>
  );
}
