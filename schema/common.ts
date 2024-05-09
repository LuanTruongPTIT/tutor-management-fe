import z from "zod";

export const MessageRes = z
  .object({
    message: z.string(),
    status: z.number(),
  })
  .strict();

export type MessageResType = z.TypeOf<typeof MessageRes>;
