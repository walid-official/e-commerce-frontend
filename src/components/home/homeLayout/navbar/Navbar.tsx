"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, LogIn, LogOut, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { isAuthenticated, logout } from "@/utils/auth"
import { useRouter } from "next/navigation"

export const Navbar = () => {

 const isLoggedIn = isAuthenticated()
 const router = useRouter();
 
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Products", href: "/all-products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ]

  const handleLogin = () => {
    router.push("/signin")
  }

  const handleLogout = async () => {
      logout();
      router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b py-2 bg-white/90 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90">
      <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-3">
        {/* Logo */}
        <Link href="/" className="flex gap-1 items-center">
          {/* <span className="text-gray-900 dark:text-gray-50">DenialFashion</span>
           */}
           <div>
             <Image
                     src="/logo-3.png"
                     width={70}
                     height={70}
                     alt="Stylish t-shirt on a hanger"
                     priority
                  />
           </div>
           <div className="font-semibold text-[20px] ">
             DenialFashion
           </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right-aligned actions (Cart, Auth) */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping Cart</span>
            {/* Example for cart item count */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </span>
          </Button>

          {isLoggedIn ? (
            <Button onClick={handleLogout}  variant="outline" className="hidden md:flex cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          ) : (
            <Button onClick={handleLogin}  variant="default" className="hidden md:flex cursor-pointer">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          )}

          {/* Mobile Navigation Toggle */}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col gap-6 p-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-4 border-t pt-4">
                  {isLoggedIn ? (
                    <Button onClick={handleLogout}  variant="outline" className="w-full cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  ) : (
                    <Button onClick={handleLogin}  variant="default" className="w-full cursor-pointer">
                      <LogIn className="mr-2 h-4 w-4" />
                      Login
                    </Button>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}