"use client";

import React from "react";
import { useGetUserQuery } from "@/apis/auth";
import { useGetUserAllCartsQuery } from "@/apis/cart";
import { useRemoveCartItemMutation, useUpdateCartQuantityMutation, useClearCartMutation } from "@/apis/cart";
import { IUserCart, ICartItem } from "@/interfaces/carts.interface";
import { XCircle, Minus, Plus, Trash2 } from "lucide-react";

export const Cart = () => {
  const { data: user } = useGetUserQuery();
  const userId = user?._id;

  const { data: carts, isLoading,refetch } = useGetUserAllCartsQuery(userId);
  console.log(carts)
  const removeItemMutation = useRemoveCartItemMutation();
  const updateQuantityMutation = useUpdateCartQuantityMutation();
  const clearCartMutation = useClearCartMutation();

  if (isLoading) return <p className="text-center text-lg">⏳ Loading your cart...</p>;
  if (!carts || carts.length === 0) return <p className="text-center flex justify-center items-center min-h-[80vh] text-4xl text-gray-500">🛍️ Your cart is empty.</p>;

  const handleRemoveItem = (productId: string) => {
    if (!userId) return;
    removeItemMutation.mutate({ userId, productId });
    refetch()
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (!userId || quantity < 1) return;
    updateQuantityMutation.mutate({ userId, productId, quantity });
  };

  const handleClearCart = () => {
    if (!userId) return;
    clearCartMutation.mutate(userId);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">🛒 My Shopping Cart</h2>

      {/* 🔥 Clear Cart Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleClearCart}
          disabled={clearCartMutation.isPending}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center gap-2"
        >
          <Trash2 size={18} /> Clear Cart
        </button>
      </div>

      {carts.map((cart: IUserCart, index: number) => (
        <div key={cart._id} className="mb-8">
          <h3 className="text-lg font-semibold mb-3">🧾 Cart #{index + 1}</h3>

          <div className="grid gap-4">
            {cart.items.map((item: ICartItem) => (
              <div
                key={item.productId._id}
                className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item?.image || "/placeholder.png"}
                    alt={item.productId.name}
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                  <div>
                    <p className="font-medium text-lg">{item.productId.name}</p>
                    <p className="text-sm text-gray-500">Price: ${item.price}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleUpdateQuantity(item.productId._id, item.quantity - 1)}
                    className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(item.productId._id, item.quantity + 1)}
                    className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Subtotal */}
                <p className="w-24 text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</p>

                {/* Delete Item */}
                <button
                  onClick={() => handleRemoveItem(item.productId._id)}
                  className="text-red-500 cursor-pointer hover:text-red-700 transition"
                >
                  <XCircle size={24} />
                </button>
              </div>
            ))}
          </div>

          {/* Cart Total */}
          <div className="text-right mt-4">
            <p className="text-lg font-bold">Total: ${cart.total.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
