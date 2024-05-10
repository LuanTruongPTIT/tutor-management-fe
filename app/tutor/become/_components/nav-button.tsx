import { Button } from "@/components/ui/button";
import { steps } from "../page";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { setActiveSteps, setCompleted, setIsBack } from "@/lib/slices";

interface NavButtonProps {}
interface ParmaButtonProps {
  onClick?: () => void;
}
export const totalSteps = () => {
  return steps.length;
};
export const NextStep = () => {
  const activeStep = useAppSelector((store) => store.onboarding.activeStep);

  const dispatch = useAppDispatch();
  const completed = useAppSelector((store) => store.onboarding.completed);
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = (): boolean => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() + 1 === totalSteps();
  };
  const newCompleted = { ...completed };
  newCompleted[activeStep] = true;
  dispatch(setCompleted(newCompleted));
  const newActiveStep =
    isLastStep() && !allStepsCompleted()
      ? steps.findIndex((step, i) => !(i in completed))
      : activeStep + 1;
  dispatch(setActiveSteps(newActiveStep));
};
export const NavButton: React.FC<ParmaButtonProps> = ({
  onClick,
}: ParmaButtonProps) => {
  const activeStep = useAppSelector((store) => store.onboarding.activeStep);

  const dispatch = useAppDispatch();
  const completed = useAppSelector((store) => store.onboarding.completed);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = (): boolean => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() + 1 === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    dispatch(setActiveSteps(newActiveStep));
  };

  const handleBack = () => {
    const newCompleted = { ...completed };
    newCompleted[activeStep - 1] = false;
    dispatch(setIsBack(true));
    dispatch(setActiveSteps(activeStep - 1));
  };

  const handleStep = (step: number) => () => {
    dispatch(setActiveSteps(step));
  };

  const handleComplete = () => {
    const newCompleted = { ...completed };
    newCompleted[activeStep] = true;
    dispatch(setCompleted(newCompleted));
    console.log("handleComplete");
    handleNext();
  };

  const handleReset = () => {
    dispatch(setActiveSteps(0));
    dispatch(setCompleted({ 0: false }));
  };
  return (
    <div className="flex gap-x-2 w-[450px] items-end justify-end">
      {activeStep !== 0 && (
        <Button
          disabled={handleBack === undefined}
          onClick={handleBack}
          className="w-1/3"
        >
          Back
        </Button>
      )}
      {!isLastStep() && (
        <Button type="submit" className="w-1/3">
          Next
        </Button>
      )}
      {isLastStep() && (
        <Button type="submit" className="w-1/3">
          Save
        </Button>
      )}
    </div>
  );
};
