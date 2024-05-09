import { createSlice } from "@reduxjs/toolkit";
export interface IOnboardingState {
  activeStep: number;
  completed: Record<number, boolean>;
  isBack: boolean;
  updateFormData: Record<string, any>;
  // isNext: boolean;
}
const initialState: IOnboardingState = {
  activeStep: 0,
  completed: { 0: false },
  isBack: false,
  updateFormData: {},
};

const onboardingTutorSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setActiveSteps: (state, action) => {
      state.activeStep = action.payload;
    },
    setCompleted: (state, action) => {
      state.completed = {
        ...state.completed,
        ...action.payload,
      };
    },
    setIsBack: (state, action) => {
      state.isBack = action.payload;

      if (state.isBack) {
        delete state.completed[state.activeStep - 1];
        const keyCompele = state.activeStep - 1;
        state.completed = {
          ...state.completed,
          [keyCompele]: false,
        };
      }
    },
    updateFormData: (state, action) => {
      state.updateFormData = {
        ...state.updateFormData,
        ...action.payload,
      };
    },
  },
});
export const { setActiveSteps, setCompleted, setIsBack, updateFormData } =
  onboardingTutorSlice.actions;
export default onboardingTutorSlice.reducer;
