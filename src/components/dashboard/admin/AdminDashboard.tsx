'use client';

import { useState } from 'react';
import { Users, ShoppingCart, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { useGetAllOrdersQuery } from '@/apis/order';
import { useGetAllUsersQuery } from '@/apis/auth';
import { useRouter } from 'next/navigation';

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  phone: string;
}

interface Order {
  _id: string;
  userId: string;
  createdAt: string;
  totalAmount: number;
  status: string;
}

export const AdminDashboard = () => {
  const { data: orders } = useGetAllOrdersQuery();
  const { data: users } = useGetAllUsersQuery();
  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl flex flex-col min-h-screen">
      <main className="flex flex-1 flex-col gap-6 p-4 md:p-8">
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-sm mx-auto mb-6 bg-gray-100 dark:bg-gray-800">
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Users Order
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Orders
            </TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card className="p-0 shadow-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="hidden md:table-cell">Role</TableHead>
                    <TableHead className="hidden sm:table-cell">Phone</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users?.map((user: User) => (
                    <TableRow
                      key={user._id}
                      className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                      onClick={() => router.push(`/dashboard/order/${user._id}`)}
                    >
                      <TableCell className="font-medium">{user._id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell className="hidden md:table-cell">{user.role}</TableCell>
                      <TableCell className="hidden sm:table-cell">{user.phone}</TableCell>
                      <TableCell className="text-right">Action Not Available</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card className="p-0 shadow-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Order ID</TableHead>
                    <TableHead>User ID</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="hidden sm:table-cell">Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders?.map((order: Order) => (
                    <TableRow
                      key={order._id}
                      className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                      onClick={() => router.push(`/dashboard/order/${order._id}`)}
                    >
                      <TableCell className="font-medium">{order._id}</TableCell>
                      <TableCell>
                        {users?.find((user: User) => user._id === order.userId)?.name || 'Unknown'}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {new Date(order.createdAt).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </TableCell>
                      <TableCell className="text-right">{order.totalAmount}</TableCell>
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
                            <DropdownMenuItem className="cursor-pointer">
                              View Order
                            </DropdownMenuItem>
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
  );
};
