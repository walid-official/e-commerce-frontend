
import apiClient from '@/utils/apiClient';
import { ALL_PRODUCTS, Home_PRODUCTS } from './endpoints';

export const getHomeProducts = async () => {
  const response = await apiClient.get(Home_PRODUCTS); 
  return response.data;
};

export const getAllProducts = async () => {
  const response = await apiClient.get(ALL_PRODUCTS); 
  return response.data;
};
