"use client";

import { useAppSelector } from "@/redux/store";
import AboutForm from "./StepForms/AboutForm";
import UploadPhoto from "./StepForms/UploadPhoto";
import Education from "./StepForms/Education";
import { ProfileDescription } from "./StepForms/ProfileDescription";
import AvaliabilityForm from "./StepForms/AvailabilityForm";

export default function StepForm() {
  const currentStep = useAppSelector((store) => store.onboarding.currentStep);
  console.log(currentStep);
  function renderFormByStep(step: number) {
    if (step === 1) {
      // return <AboutForm />;
      return <AvaliabilityForm />;
    }
    if (step === 2) {
      return <UploadPhoto />;
    }
    if (step === 3) {
      // return <Education />;
      return <AboutForm />;
    }
    if (step === 4) {
      return <ProfileDescription />;
    }

    if (step === 5) {
      return <Education />;
    }
  }
  return <>{renderFormByStep(currentStep)}</>;
}
