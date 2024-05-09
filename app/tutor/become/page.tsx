import StepForm from "@/components/MultiStepForm/StepForm";
import Steps from "@/components/MultiStepForm/Steps";
import { Card, CardContent } from "@/components/ui/card";

export default function TutorOnBoardingPage() {
  const steps = [
    {
      number: 1,
      title: "Personal Info",
    },
    {
      number: 2,
      title: "Upload photo",
    },
    {
      number: 3,
      title: "Education",
    },
    {
      number: 4,
      title: "Profile description",
    },
    {
      number: 5,
      title: "Avaliability",
    },
    {
      number: 6,
      title: "Submit and Confirmation",
    },
  ];

  return (
    <div className="min-h-900px p-4 mt">
      <Card className="max-w-5xl mx-auto mt-[50px] h-full rounded-lg  p-2 shadow-md sm:p-4 md:p-6 grid grid-cols-12 gap-4">
        <Steps steps={steps} />
        <div className="rounded-lg col-span-full md:col-span-8">
          <StepForm />
        </div>
      </Card>
    </div>
  );
}
