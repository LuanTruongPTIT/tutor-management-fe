import { z } from "zod";
export const applicationSchema = z.object({
  id: z.number(),
  index: z.number(),
  name: z.string(),
  position: z.string(),
  logo: z.string(),
  status: z.string(),
  createdAt: z.string(),
});

export type Application = z.infer<typeof applicationSchema>;
