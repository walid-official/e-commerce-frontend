import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createOrderApi, getAllOrdersApi, getUserOrdersApi } from "./apis";


// Create Order
export const useCreateOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createOrderApi,
    onSuccess: () => {
      toast.success(" Order placed successfully!");
      // Optionally invalidate cart or orders
      queryClient.invalidateQueries({ queryKey: ["user_orders"] });
      queryClient.invalidateQueries({ queryKey: ["user_all_carts"] });
    },
    onError: () => toast.error(" Failed to place order."),
  });
};

// Get User Orders
export const useGetUserOrdersQuery = (userId: string) => {
  return useQuery({
    queryKey: ["user_orders", userId],
    queryFn: () => getUserOrdersApi(userId),
    enabled: !!userId,
    staleTime: 0,
  });
};

// Get All Orders (Admin)
export const useGetAllOrdersQuery = () => {
  return useQuery({
    queryKey: ["all_orders"],
    queryFn: getAllOrdersApi,
    staleTime: 0,
  });
};
