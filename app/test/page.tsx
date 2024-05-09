"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavButton } from "./_components/nav-button";
import AboutForm from "./_components/about-form";
import Header from "@/components/header/Header";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { setActiveSteps } from "@/lib/slices";
import { PhotoForm } from "./_components/photo-form";
import EducationForm from "./_components/education-form";
import ProfileDescriptionForm from "./_components/profile-description-form";
import AvailabilityForm from "./_components/availability-form";

export const steps = [
  "About",
  "Photo",
  "Education",
  "Profile Description",
  "Availability",
];

export default function HorizontalNonLinearStepper() {
  const activeStep = useAppSelector((store) => store.onboarding.activeStep);
  const dispatch = useAppDispatch();
  const completed = useAppSelector((store) => store.onboarding.completed);

  const handleStep = (step: number) => () => {
    dispatch(setActiveSteps(step));
  };

  return (
    <>
      <Header />
      <Box className="h-screen pt-[40px]">
        <Stepper
          nonLinear
          activeStep={activeStep}
          className="w-[50%] mx-auto h-[32px] justify-center items-center"
        >
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div className="h-full pt-[40px] w-full text-center">
          {/* handleBack, handleNext, handleReset, activeStep, lastStep, */}
          {activeStep === 0 && <AboutForm />}
          {activeStep === 1 && <PhotoForm />}
          {activeStep === 2 && <EducationForm />}
          {activeStep === 3 && <ProfileDescriptionForm />}
          {activeStep === 4 && <AvailabilityForm />}
        </div>
      </Box>
    </>
  );
}
