import apiClient from '@/utils/apiClient';
import { ADD_TO_CART, REMOVE_CART_ITEM, GET_USER_ALL_CARTS } from './endpoints';

// Add Product to Cart
export const addToCartApi = async (payload: { userId: string; productId: string; quantity: number }) => {
  const response = await apiClient.post(ADD_TO_CART, payload);
  return response.data;
};

// Get User Cart
export const getUserAllCarts = async (userId: string) => {
  const response = await apiClient.get(GET_USER_ALL_CARTS(userId));
  return response.data.carts;
};

// Remove Item from Cart
export const removeCartItemApi = async (payload: { userId: string; productId: string }) => {
  const response = await apiClient.delete(REMOVE_CART_ITEM, { data: payload });
  return response.data;
};

export const updateCartItemQuantityApi = async (payload: { userId: string; productId: string; quantity: number }) => {
  const response = await apiClient.patch("/api/cart/update-quantity", payload);
  return response.data;
};

export const clearUserCartApi = async (userId: string) => {
  const response = await apiClient.delete(`/api/cart/clear/${userId}`);
  return response.data;
};

