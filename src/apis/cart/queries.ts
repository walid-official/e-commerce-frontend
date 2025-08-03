import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCartApi, clearUserCartApi, getUserAllCarts, removeCartItemApi, updateCartItemQuantityApi } from "./apis";
import toast from "react-hot-toast";

// Get Cart Query
export const useGetUserAllCartsQuery = (userId: string) => {
  return useQuery({
    queryKey: ["user_all_carts", userId],
    queryFn: () => getUserAllCarts(userId),
    enabled: !!userId,
    staleTime: 0,
  });
};

// Add to Cart Mutation
export const useAddToCartMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addToCartApi,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['cart', variables.userId] });
       toast.success('Successfully added to cart!');
    },
  });
};

// Remove Cart Item Mutation
export const useRemoveCartItemMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeCartItemApi,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['cart', variables.userId] });
      toast.success('Successfully removed from cart!');
    },
  });
};

//  Update Quantity
export const useUpdateCartQuantityMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: { userId: string; productId: string; quantity: number }) =>
      updateCartItemQuantityApi(payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["user_all_carts", variables.userId] });
    },
    onError: () => toast.error(" Failed to update quantity!"),
  });
};

//  Clear Entire Cart
export const useClearCartMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId: string) => clearUserCartApi(userId),
    onSuccess: (_, userId) => {
      queryClient.invalidateQueries({ queryKey: ["user_all_carts", userId] });
      toast.success("🛒 Cart cleared!");
    },
    onError: () => toast.error(" Failed to clear cart!"),
  });
};