import { useAppSelector } from "@/redux/store";

export default function ConfirmSubmit() {
  const result: Record<string, any> = useAppSelector(
    (data) => data.onboarding.formData
  );
  console.log(result);
  return <div>{JSON.stringify(String(result))}</div>;
}
