import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  confirmPassword: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const AboutTutorSchema = z.object({
  firstName: z.string().max(20, {
    message: "Max 20 characters required",
  }),
  lastName: z.string().max(20, {
    message: "Max 20 characters required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  phone: z.string().max(10, {
    message: "must 10 characters required",
  }),
});
