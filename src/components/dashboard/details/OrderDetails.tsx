"use client";

import { useGetAllOrdersQuery } from "@/apis/order";
import { useGetUserByIdQuery } from "@/apis/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

type OrderDetailsProps = {
  userId: string;
};

export const OrderDetails = ({ userId }: OrderDetailsProps) => {
  const { data: orders, isLoading: ordersLoading } = useGetAllOrdersQuery();
  const { data: user, isLoading: userLoading } = useGetUserByIdQuery(userId);

  const filteredOrders = orders?.filter((order: any) => order.userId === userId);
  
  const totalAmount =
  filteredOrders?.reduce((acc: number, order: any) => {
    const totalQuantity = order.items?.reduce((sum: number, item: any) => sum + item.quantity, 0);
    return acc + totalQuantity;
  }, 0) * 200;


  if (ordersLoading || userLoading) return <div>Loading...</div>;

  if (!filteredOrders?.length)
    return (
      <div className="flex justify-center items-center min-h-[90vh] text-3xl">
        No orders found for this user.
      </div>
    );

  return (
    <div className="flex flex-col mx-auto max-w-7xl min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/admin">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to dashboard</span>
          </Link>
        </Button>
        <h1 className="text-xl font-semibold">Orders for {user?.name}</h1>
      </div>

      {/* User Info */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Customer Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Name</TableCell>
                <TableCell>{user?.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Email</TableCell>
                <TableCell>{user?.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Phone</TableCell>
                <TableCell>{user?.phone || "N/A"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Order Table */}
      <Card>
        <CardHeader>
          <CardTitle>Order History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Products</TableHead>
                <TableHead className="text-right">Quantities</TableHead>
                <TableHead className="text-right">Status</TableHead>
                <TableHead className="text-right">Date</TableHead>
                <TableHead className="text-right">Payment</TableHead>
                <TableHead className="text-right">Shipping</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order: any) => (
                <TableRow key={order._id}>
                  <TableCell>{order._id}</TableCell>
                  <TableCell>
                    {order.items.map((item: any) => (
                      <div key={item._id}>{item.productId}</div>
                    ))}
                  </TableCell>
                  <TableCell className="text-right">
                    {order.items.map((item: any) => (
                      <div key={item._id}>{item.quantity}</div>
                    ))}
                  </TableCell>
                  <TableCell className="text-right capitalize">{order.status}</TableCell>
                  <TableCell className="text-right">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">{order.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    <div>{order.location?.address}</div>
                    <div>
                      {order.location?.city}, {order.location?.district}
                    </div>
                    <div>{order.location?.postalCode}</div>
                  </TableCell>
                </TableRow>
              ))}

              {/* Total row */}
              <TableRow className="bg-gray-50">
                <TableCell colSpan={6} className="text-right font-semibold">
                  Total Amount
                </TableCell>
                <TableCell className="text-right font-bold text-green-700">
                  ${totalAmount?.toFixed(2)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
