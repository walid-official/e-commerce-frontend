import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getHomeProducts, getProductById } from './apis';


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

export const useGetProductByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
};