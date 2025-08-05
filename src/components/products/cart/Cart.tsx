"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useGetUserQuery } from "@/apis/auth";
import {
  useGetUserAllCartsQuery,
  useRemoveCartItemMutation,
  useUpdateCartQuantityMutation,
  useClearCartMutation,
} from "@/apis/cart";
import { IUserCart, ICartItem } from "@/interfaces/carts.interface";
import { XCircle, Minus, Plus } from "lucide-react";
import toast from "react-hot-toast";
import Image from "next/image";
import { useAppDispatch } from "@/lib/Hooks";
import { setOrderData, OrderState } from "@/store/slices/orderSlice";

export const Cart = () => {
  const router = useRouter();
  const { data: user } = useGetUserQuery();
  const userId = user?._id;
  const dispatch = useAppDispatch();

  const { data: carts, isLoading, refetch } = useGetUserAllCartsQuery(userId);
  const removeItemMutation = useRemoveCartItemMutation();
  const updateQuantityMutation = useUpdateCartQuantityMutation();
  const clearCartMutation = useClearCartMutation();

  if (isLoading)
    return <p className="text-center text-lg">⏳ Loading your cart...</p>;

  if (!carts || carts.length === 0)
    return (
      <p className="text-center flex justify-center items-center min-h-[80vh] text-4xl text-gray-500">
        🛍️ Your cart is empty.
      </p>
    );

  const handleRemoveItem = (productId: string) => {
    if (!userId) return;
    removeItemMutation.mutate({ userId, productId });
    refetch();
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (!userId || quantity < 1) return;
    updateQuantityMutation.mutate({ userId, productId, quantity });
  };

  // You can uncomment and use this if needed
  // const handleClearCart = () => {
  //   if (!userId) return;
  //   clearCartMutation.mutate(userId);
  // };

  const handleOrderAll = () => {
    if (!user || !carts) return;

    const confirmed = window.confirm("Are you sure you want to place this order?");
    if (!confirmed) return;

    // Flatten all items and type them properly
    const allItems = carts.flatMap((cart: IUserCart) =>
      cart.items.map((item: ICartItem) => ({
        productId: item.productId._id,
        quantity: item.quantity,
      }))
    );

    // Calculate totalAmount properly
    interface CartWithTotal extends IUserCart {
      total: number;
    }

    const totalAmount = (carts as CartWithTotal[]).reduce((acc: number, cart: CartWithTotal) => acc + cart.total, 0);

    const order: OrderState = {
      userId: user._id,
      items: allItems,
      totalAmount,
      paymentMethod: "COD",
      status: "pending",
    };

    dispatch(setOrderData(order));
    toast.success("🛒 Order saved. Proceed to checkout!");
    router.push(`/orders/${user._id}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">🛒 My Shopping Cart</h2>

      {/* Cart Controls */}
      <div className="flex justify-end mb-4 gap-4">
        {/* Uncomment below button if you want to use Clear Cart */}
        {/* <button
          onClick={handleClearCart}
          disabled={clearCartMutation.isLoading}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center gap-2"
        >
          <Trash2 size={18} /> Clear Cart
        </button> */}

        <button
          onClick={handleOrderAll}
          className="bg-green-600 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2"
        >
          🧾 Order All
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
                  <Image
                    src={item?.image || "/placeholder.png"}
                    alt={item.productId.name}
                    width={64}
                    height={64}
                    className="rounded-md border object-cover"
                  />
                  <div>
                    <p className="font-medium text-lg">{item.productId.name}</p>
                    <p className="text-sm text-gray-500">Price: ${item.price}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      handleUpdateQuantity(item.productId._id, item.quantity - 1)
                    }
                    className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleUpdateQuantity(item.productId._id, item.quantity + 1)
                    }
                    className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Subtotal */}
                <p className="w-24 text-right font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

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
