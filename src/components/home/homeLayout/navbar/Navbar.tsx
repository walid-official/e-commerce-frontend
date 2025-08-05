"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, LogIn, LogOut, ShoppingCart, LayoutDashboard } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { isAuthenticated, logout } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { useGetUserQuery } from "@/apis/auth";
import { useGetUserAllCartsQuery } from "@/apis/cart";

// Define types for your cart and cart items (adjust according to your API response)
interface Product {
  _id: string;
  // other product fields if needed
}

interface CartItem {
  productId: Product;
  quantity: number;
}

interface Cart {
  items: CartItem[];
}

export const Navbar = () => {
  const isLoggedIn = isAuthenticated();
  const router = useRouter();
  const { data: user } = useGetUserQuery();
  const userId = user?._id;

  // Removed isLoading and refetch since they are unused
  const { data: carts } = useGetUserAllCartsQuery(userId);

  const allItems =
    Array.isArray(carts) && carts.length > 0
      ? carts.flatMap((cart: Cart) =>
          cart.items.map((item: CartItem) => ({
            productId: item.productId._id,
            quantity: item.quantity,
          }))
        )
      : [];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Products", href: "/all-products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  const handleLogin = () => router.push("/signin");
  const handleLogout = () => {
    logout();
    router.push("/signin");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b py-2 bg-white/90 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90">
      <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex gap-1 items-center">
          <Image src="/logo-3.png" width={70} height={70} alt="Logo" priority />
          <span className="font-semibold text-[20px] whitespace-nowrap">DenialFashion</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Cart */}
          <Link href="/carts">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                {allItems?.length ?? 0}
              </span>
            </Button>
          </Link>

          {/* Auth Buttons (Desktop Only) */}
          {isLoggedIn ? (
            <div className="hidden md:flex gap-2">
              {user?.role === "admin" && (
                <Link href="/dashboard/admin">
                  <Button variant="outline" className="cursor-pointer">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
              )}
              <Button onClick={handleLogout} variant="outline" className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          ) : (
            <Button
              onClick={handleLogin}
              variant="default"
              className="hidden md:flex cursor-pointer"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          )}

          {/* Mobile Hamburger Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="p-6 flex flex-col gap-6">
                {/* Nav Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Auth Buttons (Mobile) */}
                <div className="mt-4 border-t pt-4 flex flex-col gap-3">
                  {isLoggedIn ? (
                    <>
                      {user?.role === "admin" && (
                        <Link href="/dashboard/admin">
                          <Button variant="outline" className="w-full">
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                      <Button onClick={handleLogout} variant="outline" className="w-full">
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <Button onClick={handleLogin} variant="default" className="w-full">
                      <LogIn className="mr-2 h-4 w-4" />
                      Login
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
