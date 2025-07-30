"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SigninForm } from "../signin"
import { SignupForm } from "../signup"
import { usePathname } from "next/navigation"
import { UpdatePasswordForm } from "../updatePassword"

export const AuthForm = ({ isLogin }: { isLogin?: boolean }) =>  {
 const pathname = usePathname(); 

  const isUpdatePassword = pathname === "/update-password";

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-2">
      {/* Left Column: Auth Form */}
      <div className="flex items-center justify-center p-6 lg:p-10">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">{isLogin ? "Sign In to Your Account" : "Create Your Account"}</CardTitle>
            <CardDescription>
              {isLogin
                ? "Enter your email and password to access your dashboard."
                : "Join our community and discover amazing products."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isUpdatePassword ? (
              <UpdatePasswordForm />
            ) : isLogin ? (
              <SigninForm />
            ) : (
              <SignupForm />
            )}
            <div className="mt-6 text-center text-sm">
              {isLogin ? (
                <>
                  Don&apos;t have an account?{" "}
                  <Link href="/signup"  className="underline">
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <Link href="/signin"  className="underline">
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column: Marketing Content */}
      <div className="hidden items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 p-6 lg:flex lg:p-10">
        <div className="mx-auto max-w-md space-y-6 text-center text-white">
          <h2 className="text-4xl font-bold leading-tight">Unlock a World of Exclusive Products</h2>
          <p className="text-lg opacity-90">
            Discover the latest trends, shop with confidence, and enjoy a seamless experience tailored just for you.
          </p>
          <Image
            src="/authentication.jpg"
            width={600}
            height={600}
            alt="E-commerce shopping illustration"
            className="mx-auto mt-8 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
