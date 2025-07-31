"use client"
import { useGetProductByIdQuery } from '@/apis/products';
import React from 'react';
type ProductDetailsProps = {
  productId: string;
};
export const Details = ({productId}: ProductDetailsProps) => {
     const { data: product, isLoading, isError } = useGetProductByIdQuery(productId);
     console.log(product)
    return (
        <div>
            
        </div>
    );
};