import { z } from "zod";

const requiredMsg = "*required";

export const contactMeEmailSchema = z.object({
  name: z
    .string({ required_error: requiredMsg })
    .min(1, { message: requiredMsg }),
  email: z
    .string({ required_error: requiredMsg })
    .email({ message: "Provide a valid email" }),
  message: z
    .string({ required_error: requiredMsg })
    .min(1, { message: requiredMsg }),
});
