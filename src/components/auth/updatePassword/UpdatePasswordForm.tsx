"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGetUserQuery, useUpdatePasswordMutation } from "@/apis/auth";

export const UpdatePasswordForm = () => {
  const { data: user } = useGetUserQuery();
  const { mutateAsync, isPending, isError, error } = useUpdatePasswordMutation();

  const [password, setPassword] = useState("");

  // Extract user data safely
  const email = user?.email || "";
  const name = user?.name || "";
   let phone = user?.phone || "";

  if (phone.startsWith("+880")) {
    phone = phone.replace("+880", "0");
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !name || !phone) {
      console.error("Missing required user info");
      alert("User info is incomplete!");
      return;
    }

    try {
      await mutateAsync({
        email,
        name,
        phone,
        newPassword: password,
      });

      alert("Password updated successfully!");
      setPassword("");
    } catch (err: any) {
      console.error(err);
      alert(err?.response?.data?.error || "Failed to update password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" value={email} readOnly placeholder="m@example.com" />
      </div>

      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" value={name} readOnly />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" value={phone} readOnly />
      </div>

      {/* New Password */}
      <div className="space-y-2">
        <Label htmlFor="password">New Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Updating..." : "Update Password"}
      </Button>

      {/* Error Message */}
      {isError && (
        <p className="text-red-500 text-sm">
          {(error as any)?.message || "Something went wrong"}
        </p>
      )}
    </form>
  );
};
