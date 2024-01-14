"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import formSchema from "./form-schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values
    // This will be type safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-96 flex flex-col gap-3 text-muted"
      >
        <div>
          <h2 className="text-2xl font-bold text-center text-background m-0">
            Sign In
          </h2>
          <p className="text-center text-muted text-sm">
            Login to your account.
          </p>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example.com@outlook.com"
                  type="email"
                  className="bg-foreground"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Password"
                  type="password"
                  className="bg-foreground"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        <div className="flex flex-col">
          <Button asChild>
            <Link href="/sign-up" className="bg-transparent hover:bg-transparent">
              Do you have not an account?
            </Link>
          </Button>
          <Button
            type="submit"
            className="mt-2 outline-1 bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            Sign In
          </Button>
        </div>
      </form>
    </Form>
  );
}
