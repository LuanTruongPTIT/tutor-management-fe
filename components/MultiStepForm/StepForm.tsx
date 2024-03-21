"use client";

import { useAppSelector } from "@/redux/store";
import AboutForm from "./StepForms/AboutForm";
import UploadPhoto from "./StepForms/UploadPhoto";

export default function StepForm() {
  const currentStep = useAppSelector((store) => store.onboarding.currentStep);
  console.log(currentStep);
  function renderFormByStep(step: number) {
    if (step === 1) {
      return <UploadPhoto />;
    }
    if (step === 2) {
      return <AboutForm />;
    }
  }
  return <>{renderFormByStep(currentStep)}</>;
}
