import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCartApi, clearCartApi, getCartApi, removeCartItemApi } from "./apis";

// Get Cart Query
export const useGetCartQuery = (userId: string) => {
  return useQuery({
    queryKey: ['cart', userId],
    queryFn: () => getCartApi(userId),
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
    },
  });
};

// Clear Cart Mutation
export const useClearCartMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: clearCartApi,
    onSuccess: (_, userId) => {
      queryClient.invalidateQueries({ queryKey: ['cart', userId] });
    },
  });
};
