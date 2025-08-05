"use client";

import React from "react";
import { useGetAllProductsQuery } from "@/apis/products";
import { Card } from "../card";

export interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  // add other product properties you expect here
}

export const AllProducts = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery();
  const all_products: Product[] | undefined = data?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p>Loading products...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-40 text-red-500">
        <p>Failed to load products. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <section className="relative py-12 md:py-20 lg:py-20 overflow-hidden">
        {/* Background shape */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="full h-[200px] rounded-full bg-gradient-radial from-cyan-300/50 to-transparent blur-3xl opacity-60 animate-pulse-slow" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Discover Our Collection
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Explore a diverse range of products, hand-picked for quality and style. Find exactly what you&apos;re
              looking for.
            </p>
          </div>
          {/*
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]" align="end">
                <DropdownMenuRadioGroup value="featured">
                  <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="low-to-high">Price: Low to High</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="high-to-low">Price: High to Low</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          */}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {all_products?.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
