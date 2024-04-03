import { setCurrentSteps } from "@/redux/slices/onboardingTutorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface NavButtonsProps {
  isCheck?: boolean;
}
export default function NavButtons({ isCheck }: NavButtonsProps) {
  const currentStep = useAppSelector((store) => store.onboarding.currentStep);
  const dispatch = useAppDispatch();
  function handleNext() {
    if (isCheck) {
      dispatch(setCurrentSteps(currentStep + 1));
    }
  }
  function handlePrevious() {
    dispatch(setCurrentSteps(currentStep - 1));
  }
  return (
    <div className="py-[24px] flex items-end justify-end flex-end gap-2">
      {currentStep > 1 && (
        <Button
          variant="outline"
          className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center  rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 "
          onClick={handlePrevious}
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          <span>Previous</span>
        </Button>
      )}
      <Button
        className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center
       text-white bg-slate-900 rounded-lg focus:ring-4
        focus:ring-blue-200 dark:focus:ring-blue-900
         hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700"
        onClick={handleNext}
      >
        <span>{currentStep === 6 ? "Confirm and Submit" : "Continue"}</span>
        <ChevronRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
}
