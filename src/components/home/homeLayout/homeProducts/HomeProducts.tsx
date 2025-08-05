"use client";

import React from "react";
import Link from "next/link";
import { useGetHomeProductsQuery } from "@/apis/products";
import { Spinner } from "@/components/ui/spinner";
import { Card } from "@/components/products/card";

// Define the product type properly based on your API response structure
interface Product {
  _id: string;
  name: string;
  image: string;
  material?: string;
  price: number;
}

export const HomeProducts = () => {
  const { data, isLoading, isError } = useGetHomeProductsQuery();
  const products: Product[] | undefined = data?.data;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner size="medium" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen text-red-600">
        Failed to load products.
      </div>
    );
  }

  return (
    <div className="relative w-full py-12 md:py-24 lg:py-32 bg-neutral-50 overflow-hidden">
      <section className="mx-auto max-w-7xl px-3">
        {/* Large, soft blob shape on the left */}
        <svg
          className="absolute top-0 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] z-0"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#F0F8FF" // Very light blue
            d="M447.5,300.5Q400,401,300.5,447.5Q201,495,100.5,447.5Q0,400,47.5,300.5Q95,201,47.5,100.5Q0,0,100.5,47.5Q201,95,300.5,47.5Q400,0,447.5,100.5Q495,201,447.5,300.5Z"
            transform="translate(0 0)"
          />
        </svg>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Best Sellers
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover what everyone loves. Top-rated t-shirts by our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products?.map((item: Product) => (
              <Card key={item._id} item={item} />
            ))}
          </div>

          {/* Styled Default Button */}
          <div className="flex justify-center mt-12">
            <Link href="/all-products">
              <button
                className="group cursor-pointer bg-teal-500 hover:bg-teal-600 text-white font-semibold text-lg rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:translate-x-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                <span className="flex items-center gap-2">
                  View All Products
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
