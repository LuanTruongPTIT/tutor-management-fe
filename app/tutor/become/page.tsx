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
    // <div className="bg-blue-50 min-h-40 p-4">
    <Card className="max-w-5xl mx-auto mt-[100px] min-h-[700px] rounded-lg  p-4 shadow-md sm:p-4 md:p-6 grid grid-cols-12 gap-4">
      {/* Steps */}
      {/* <CardContent> */}
      <Steps steps={steps} />
      {/* </CardContent> */}
      <div className="rounded-lg col-span-full md:col-span-8">
        <StepForm />
      </div>
      {/* // </div> */}
    </Card>
  );
}
