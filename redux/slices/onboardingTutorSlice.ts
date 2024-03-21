import { createSlice } from "@reduxjs/toolkit";
export interface IOnboardingState {
  currentStep: number;
  formData: Record<string, any>;
}
const initialState: IOnboardingState = {
  currentStep: 1,
  formData: {},
};

const onboardingTutorSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setCurrentSteps: (state, action) => {
      state.currentStep = action.payload;
    },
    updateFormData: (state, action) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
  },
});
export const { setCurrentSteps, updateFormData } = onboardingTutorSlice.actions;
export default onboardingTutorSlice.reducer;
