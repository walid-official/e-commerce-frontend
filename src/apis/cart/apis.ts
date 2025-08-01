import apiClient from '@/utils/apiClient';
import { ADD_TO_CART, GET_CART, REMOVE_CART_ITEM, CLEAR_CART } from './endpoints';

// Add Product to Cart
export const addToCartApi = async (payload: { userId: string; productId: string; quantity: number }) => {
  const response = await apiClient.post(ADD_TO_CART, payload);
  return response.data;
};

// Get User Cart
export const getCartApi = async (userId: string) => {
  const response = await apiClient.get(GET_CART(userId));
  return response.data;
};

// Remove Item from Cart
export const removeCartItemApi = async (payload: { userId: string; productId: string }) => {
  const response = await apiClient.delete(REMOVE_CART_ITEM, { data: payload });
  return response.data;
};

// Clear Entire Cart
export const clearCartApi = async (userId: string) => {
  const response = await apiClient.delete(CLEAR_CART, { data: { userId } });
  return response.data;
};
