"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Users, ShoppingCart, MoreHorizontal, Package2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

const usersData = [
  { id: "USR001", name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: "USR002", name: "Bob Williams", email: "bob@example.com", role: "Editor", status: "Active" },
  { id: "USR003", name: "Charlie Brown", email: "charlie@example.com", role: "Viewer", status: "Inactive" },
  { id: "USR004", name: "Diana Prince", email: "diana@example.com", role: "Admin", status: "Active" },
  { id: "USR005", name: "Eve Adams", email: "eve@example.com", role: "Editor", status: "Active" },
]

const ordersData = [
  { id: "ORD001", customer: "Alice Johnson", date: "2023-10-26", amount: "$120.00", status: "Completed" },
  { id: "ORD002", customer: "Bob Williams", date: "2023-10-25", amount: "$75.50", status: "Pending" },
  { id: "ORD003", customer: "Charlie Brown", date: "2023-10-24", amount: "$200.00", status: "Shipped" },
  { id: "ORD004", customer: "Diana Prince", date: "2023-10-23", amount: "$50.00", status: "Completed" },
  { id: "ORD005", customer: "Eve Adams", date: "2023-10-22", amount: "$300.00", status: "Cancelled" },
]

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("users")

  return (
    <div className="mx-auto max-w-7xl flex flex-col min-h-screen ">
        <div className="">
            <main className="flex flex-1 flex-col gap-6 p-4 md:p-8 ">
                <Tabs defaultValue="users" onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-sm mx-auto mb-6 bg-gray-100 dark:bg-gray-800">
                    <TabsTrigger value="users" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Users
                    </TabsTrigger>
                    <TabsTrigger value="orders" className="flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Orders
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="users">
                    <Card className="p-0 shadow-md">
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead className="hidden md:table-cell">Role</TableHead>
                            <TableHead className="hidden sm:table-cell">Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {usersData.map((user) => (
                            <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell className="hidden md:table-cell">{user.role}</TableCell>
                            <TableCell className="hidden sm:table-cell">{user.status}</TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="w-4 h-4" />
                                    <span className="sr-only">Actions</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>View User</DropdownMenuItem>
                                    <DropdownMenuItem>Edit User</DropdownMenuItem>
                                    <DropdownMenuItem>Delete User</DropdownMenuItem>
                                </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </Card>
                </TabsContent>

                <TabsContent value="orders">
                    <Card className="p-0 shadow-md">
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Order ID</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead className="hidden md:table-cell">Date</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead className="hidden sm:table-cell">Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {ordersData.map((order) => (
                            <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.customer}</TableCell>
                            <TableCell className="hidden md:table-cell">{order.date}</TableCell>
                            <TableCell className="text-right">{order.amount}</TableCell>
                            <TableCell className="hidden sm:table-cell">{order.status}</TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="w-4 h-4" />
                                    <span className="sr-only">Actions</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>View Order</DropdownMenuItem>
                                    <DropdownMenuItem>Edit Order</DropdownMenuItem>
                                    <DropdownMenuItem>Cancel Order</DropdownMenuItem>
                                </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </Card>
                </TabsContent>
                </Tabs>
            </main>
        </div>
    </div>
  )
}
