"use client"

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
interface CardProps {
  item: any; 
}
export const Card: React.FC<CardProps>  = ({item}) => {
    return (
       <div
                     
            className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
            <Link href={`/all-products/${item?._id}`} passHref>
                <img
                    src={`${item?.image}`}
                    alt={`Best Seller T-Shirt ${item?.name}`}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-semibold mb-1">{item?.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{item?.material}</p>
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-xl font-bold">{item?.price}.00 BD</span>
                    </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-center">
                    <Button
                        variant="outline"
                        className="w-full cursor-pointer"
                    >
                        View Details
                    </Button>
                </CardFooter>
            </Link>
   </div>
    );
};