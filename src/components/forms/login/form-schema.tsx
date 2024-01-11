import { yupResolver } from "@hookform/resolvers/yup";
import * as z from "zod";
yupResolver;

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string(),
});

export default formSchema;
