"use client"

import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useGetUserQuery } from "@/apis/auth"
import { useAppSelector } from "@/lib/Hooks"

export const Confirmation = () => {
  // In a real application, you would fetch the order ID and phone number dynamically
  const orderId = "XYZ123ABC"
  const customerPhoneNumber = "123-456-7890" // This would come from user data or order details

  const {data: user} = useGetUserQuery();
  const order = useAppSelector((state) => state.order);
  console.log(order)
  
  console.log(user)

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-3xl text-center shadow-lg">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-3xl font-bold">Order Confirmed!</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Thank you for your purchase. Your order has been successfully placed.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">User ID:</p>
            <p className="text-xl font-semibold text-primary">{order?.userId}</p>
          </div>
          <div className="space-y-2">
            <p className="text-base text-foreground">
              We will reach out to you shortly by calling your provided number:{" "}
              <span className="font-medium text-primary">{user?.phone}</span> to confirm the details and
              estimated delivery time.
            </p>
            <p className="text-sm text-muted-foreground">Please keep your phone handy.</p>
          </div>
          <Link href="/all-products" passHref>
            <Button className="w-full cursor-pointer">Continue Shopping</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
