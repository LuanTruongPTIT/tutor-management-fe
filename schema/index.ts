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
  firstName: z.string().min(1, {
    message: "Max 20 characters required",
  }),
  lastName: z.string().min(1, {
    message: "Max 20 characters required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  phone: z.string().min(10).max(10, {
    message: "must have 10 characters required",
  }),
  isAge18: z.boolean().refine((value) => value === true, {
    message: "isAge18 is required",
  }),
});

export const EducationSchema = z.object({
  universityName: z.string().nullable(),
  degree: z.string().nullable(),
  degreeType: z.string(),
  specialization: z.string(),
});
