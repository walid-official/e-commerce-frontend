"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignupMutation } from "@/apis/auth";

export const SignupForm = () => {
  const signupMutation = useSignupMutation();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signupMutation.mutate(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={form.email} onChange={handleChange} placeholder="m@example.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" value={form.password} onChange={handleChange} required />
      </div>

      <Button type="submit" className="w-full" disabled={signupMutation.isPending}>
        {signupMutation.isPending ? "Signing up..." : "Sign Up"}
      </Button>

      {signupMutation.isError && (
        <p className="text-red-500 text-sm">{(signupMutation.error as any)?.message}</p>
      )}
    </form>
  );
};


{/* <Separator className="my-6" /> */}
      {/* <div className="space-y-2">
        <Button variant="outline" className="w-full bg-transparent">
          <ChromeIcon className="mr-2 h-4 w-4" />
          Sign up with Google
        </Button>
        <Button variant="outline" className="w-full bg-transparent">
          <GithubIcon className="mr-2 h-4 w-4" />
          Sign up with Facebook
        </Button>
        <Button variant="outline" className="w-full bg-transparent">
          <AppleIcon className="mr-2 h-4 w-4" />
          Sign up with Apple
        </Button>
      </div> */}