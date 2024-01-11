import { yupResolver } from "@hookform/resolvers/yup";
import * as z from "zod";
yupResolver;

const formSchema = z
  .object({
    username: z.string().min(6, {
      message: "Username must be at least 6 characters long",
    }),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    passwordConfirmation: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
  })
  .superRefine(({ passwordConfirmation, password }, ctx) => {
    if (passwordConfirmation !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords did not match.",
        path: ["passwordConfirmation"],
      });
    }
  });

export default formSchema;
