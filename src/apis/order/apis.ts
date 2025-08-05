import apiClient from "@/utils/apiClient";
import { ALL_ORDERS, ORDERS, USER_ORDER, USER_ORDERS } from "./endpoints";
import { placeOrder } from './../../interfaces/placeOrder.interface';

// Create Order
export const createOrderApi = async (orderData: placeOrder) => {
  const response = await apiClient.post(ORDERS, orderData);
  return response.data;
};

// Get User Orders
export const getUserOrdersApi = async (userId: string) => {
  const response = await apiClient.get(`${USER_ORDERS}/${userId}`);
  return response.data;
};

// Get All Orders (Admin only)
export const getAllOrdersApi = async () => {
  const response = await apiClient.get(ALL_ORDERS);
  return response.data;
};

export const getUserOrderApi = async (userId: string) => {
  const response = await apiClient.get(USER_ORDER(userId));
  return response.data;
};