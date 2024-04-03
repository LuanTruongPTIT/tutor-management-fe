import { MultiSelect } from "@/components/MultiSelect";
import * as React from "react";
import { useState } from "react";

export default function AvaliabilityForm() {
  const [selected, setSelected] = useState<string[]>([]);

  return <MultiSelect />;
}
