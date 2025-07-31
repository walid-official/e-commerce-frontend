
import apiClient from '@/utils/apiClient';
import { ALL_PRODUCTS, PRODUCT_BY_ID, PRODUCTS } from './endpoints';

export const getHomeProducts = async () => {
  const response = await apiClient.get(PRODUCTS); 
  return response.data;
};

export const getAllProducts = async () => {
  const response = await apiClient.get(ALL_PRODUCTS); 
  return response.data;
};

export const getProductById = async (id: string) => {
  const response = await apiClient.get(PRODUCT_BY_ID(id));
  return response.data.data; 
};
