"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSigninMutation } from "@/apis/auth";

export const SigninForm = () => {
  const signinMutation = useSigninMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  signinMutation.mutate({ emailOrPhone: email, password });
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="m@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

       <Button type="submit" className="w-full" disabled={signinMutation.isPending}>
        {signinMutation.isPending ? "Signing in..." : "Sign in"}
      </Button>

      {signinMutation.isError && (
        <p className="text-red-500 text-sm">{(signinMutation.error as any)?.message}</p>
      )}
    </form>
  );
};