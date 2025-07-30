import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getHomeProducts } from './apis';


export const useGetHomeProductsQuery = () => {
  return useQuery({
    queryKey: ['home_products'],
    queryFn: getHomeProducts,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
};
export const useGetAllProductsQuery = () => {
  return useQuery({
    queryKey: ['all_products'],
    queryFn: getAllProducts,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
};