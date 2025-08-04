"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useAppSelector } from '@/lib/Hooks';
import { Badge } from 'lucide-react';
import React from 'react';

export const Checkout = () => {
    const order = useAppSelector((state) => state.order);
    console.log(order)
    return (
        <div className='max-w-7xl mx-auto px-3'>
            <div>
                
            </div>
            <Card className="shadow-xl rounded-xl overflow-hidden border border-gray-200 bg-white">
                <CardHeader className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white p-6 sm:p-8">
                    <CardTitle className="text-3xl sm:text-4xl font-extrabold tracking-tight">Your Order Summary</CardTitle>
                    <CardDescription className="text-purple-200 text-base sm:text-lg mt-2">
                    A quick overview of your selected items and payment details.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 space-y-6">
                    <div className="space-y-4 text-gray-800">
                    <h3 className="text-xl font-bold border-b pb-2 text-gray-900">Order Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <p className="flex justify-between items-center">
                        <span className="font-semibold">Payment Method:</span>
                        <span className="text-gray-900 font-medium">{order.paymentMethod}</span>
                        </p>
                        <p className="flex justify-between items-center">
                        <span className="font-semibold">Status:</span>
                        <Badge className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {order?.status}
                        </Badge>
                        </p>
                        <p className="flex justify-between items-center sm:col-span-2 text-2xl font-bold text-gray-900">
                        <span>Total Amount:</span>
                        <span>${order.totalAmount.toFixed(2)}</span>
                        </p>
                    </div>
                    <Separator className="my-4" />
                    <div className="space-y-2">
                        <p className="font-semibold text-lg text-gray-900">Items:</p>
                        {order.items && order.items.length > 0 ? (
                        <ul className="space-y-2 text-sm">
                            {order.items.map((item, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-gray-50 p-3 rounded-md border border-gray-100"
                            >
                                <span className="text-gray-700">
                                Product ID: <span className="font-medium break-all text-gray-900">{item.productId}</span>
                                </span>
                                <span className="text-gray-700">
                                Qty: <span className="font-medium text-gray-900">{item.quantity}</span>
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
    );
};
