"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useAppSelector } from "@/lib/Hooks";
import { useCreateOrderMutation } from "@/apis/order";

export const Checkout = () => {
  const order = useAppSelector((state) => state.order);
  const { mutate: createOrder } = useCreateOrderMutation();

  const [location, setLocation] = useState({
    address: "",
    city: "",
    district: "",
    postalCode: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation({ ...location, [e.target.id]: e.target.value });
  };

  const handlePlaceOrderClick = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirmOrder = () => {
    const fullLocation = `${location.address}, ${location.city}, ${location.district}, ${location.postalCode}`;

    createOrder({
      userId: order.userId,
      items: order.items,
      totalAmount: order.totalAmount,
      location: fullLocation,
      paymentMethod: order.paymentMethod,
    });

    // console.log({
    //   userId: order.userId,
    //   items: order.items,
    //   totalAmount: order.totalAmount,
    //   location: fullLocation,
    //   paymentMethod: order.paymentMethod,
    // })

    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div>
          <Card className="shadow-xl rounded-xl overflow-hidden border border-gray-200 bg-white">
            <CardHeader className="bg-gradient-to-r from-teal-700 to-teal-800 text-white p-6 sm:p-8">
              <CardTitle className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Your Order Summary
              </CardTitle>
              <CardDescription className="text-white text-base sm:text-lg mt-2">
                A quick overview of your selected items and payment details.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 space-y-6">
              <div className="space-y-4 text-gray-800">
                <h3 className="text-xl font-bold border-b pb-2 text-gray-900">Order Details</h3>
                <div className="space-y-4">
                  <p className="flex gap-8 items-center">
                    <span className="font-semibold">Payment Method:</span>
                    <span className="text-gray-900 font-medium">{order.paymentMethod}</span>
                  </p>
                  <p className="flex gap-8 items-center">
                    <span className="font-semibold">Status:</span>
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {order?.status}
                    </div>
                  </p>
                  <p className="flex justify-between items-center sm:col-span-2 text-2xl font-bold text-gray-900">
                    <span>Total Amount:</span>
                    <span>${order.totalAmount.toFixed(2)}</span>
                  </p>
                </div>
                <Separator className="my-4" />
                <div className="space-y-2">
                  <p className="font-semibold text-lg text-gray-900">Items:</p>
                  {order.items?.length ? (
                    <ul className="space-y-2 text-sm">
                      {order.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center bg-gray-50 p-3 rounded-md border border-gray-100"
                        >
                          <span className="text-gray-700">
                            Product ID:{" "}
                            <span className="font-medium break-all text-gray-900">
                              {item.productId}
                            </span>
                          </span>
                          <span className="text-gray-700">
                            Qty:{" "}
                            <span className="font-medium text-gray-900">
                              {item.quantity}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 italic">No items in this order.</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Delivery Form */}
        <div>
          <Card className="shadow-xl rounded-xl overflow-hidden border border-gray-200">
            <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 sm:p-8">
              <CardTitle className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Delivery Details
              </CardTitle>
              <CardDescription className="text-gray-300 text-base sm:text-lg mt-2">
                Enter your shipping address to complete the order.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handlePlaceOrderClick}>
              <CardContent className="p-6 sm:p-8 space-y-6 bg-white">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      placeholder="e.g., 123 Main Street"
                      value={location.address}
                      onChange={handleLocationChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="e.g., Springfield"
                      value={location.city}
                      onChange={handleLocationChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="district">District</Label>
                    <Input
                      id="district"
                      placeholder="e.g., Dhaka"
                      value={location.district}
                      onChange={handleLocationChange}
                      required
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                      id="postalCode"
                      placeholder="e.g., 1207"
                      value={location.postalCode}
                      onChange={handleLocationChange}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-100 p-6 sm:p-8 flex justify-end border-t border-gray-200">
                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 cursor-pointer text-white font-semibold py-3 px-8 rounded-lg shadow-md text-lg"
                >
                  Place Order
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Your Order</DialogTitle>
          </DialogHeader>
          <div className="text-gray-700 text-sm">
            Are you sure you want to place this order with the provided shipping information?
          </div>
          <DialogFooter className="flex justify-end gap-4 mt-6">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirmOrder} className="bg-green-600 hover:bg-green-700 text-white">
              Confirm Order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
