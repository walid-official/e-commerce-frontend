"use client"
import { useGetProductByIdQuery } from '@/apis/products';
import React, { useState } from 'react';
import Image from "next/image";
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { CreditCard, MinusIcon, PlusIcon, ShoppingCart } from 'lucide-react';
import { useAddToCartMutation } from '@/apis/cart';
import { useGetUserQuery } from '@/apis/auth';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@/lib/Hooks';
import { setOrderData } from '@/store/slices/orderSlice';
import { OrderState } from '@/interfaces/orderStore.interface';
import { useRouter } from 'next/navigation';

type ProductDetailsProps = {
  productId: string;
};

export const Details = ({ productId }: ProductDetailsProps) => {
  const { data: product, isLoading, isError } = useGetProductByIdQuery(productId)
  const {data: user} = useGetUserQuery()
  console.log(user)
  const [selectedColor, setSelectedColor] = React.useState<string | undefined>(undefined)
  const [selectedSize, setSelectedSize] = React.useState<string | undefined>(undefined)
  const dispatch = useAppDispatch();
   const [quantity, setQuantity] = useState<number>(1);
  const addToCart = useAddToCartMutation();
  const router = useRouter()

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToCart.mutate({ userId: user?._id, productId: product._id, quantity: quantity });
    toast.success("Successfully added in cart!")
    // console.log({ userId: user?._id, productId: product._id, quantity: quantity })
  };
    const handleOrderSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      if (!user || !product) return;

      const order: OrderState = {
        userId: user._id,
        items: [
          {
            productId: product._id,
            quantity: quantity,
          },
        ],
        totalAmount: quantity * product.price,
        paymentMethod: 'COD',
        status: 'pending',
      };

      dispatch(setOrderData(order));

      toast.success("Order details saved. You can now continue to checkout.");
      router.push(`/orders/${user?._id}`)
    };


  const handleIncrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    setQuantity((prev) => (prev < product?.quantity ? prev + 1 : prev));
  };

  const handleDecrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  React.useEffect(() => {
    if (product) {
      if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0])
      }
      if (product.sizes && product.sizes.length > 0) {
        setSelectedSize(product.sizes[0])
      }
    }
  }, [product])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 text-lg text-gray-600 dark:text-gray-400">
        Loading product details...
      </div>
    )
  }

  if (isError || !product) {
    return (
      <div className="flex justify-center items-center h-64 text-lg text-red-500">
        Error loading product details or product not found.
      </div>
    )
  }


  const maxQuantity = product.inStock ? Math.min(product.quantity, 10) : 0 

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start max-w-7xl px-4 mx-auto py-8 md:py-12">
      {/* Product Image Section */}
      <div className="grid gap-4 md:gap-6">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={600}
          height={600}
          className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
          priority
        />
      </div>

      {/* Product Details Section */}
      <div className="grid gap-6 md:gap-8">
        <div className="grid gap-2">
          <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">Brand: {product.brand}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">
              {product.currency} {product.price}
            </span>
            
          </div>
          <div>
            {product.inStock ? (
              <span className="text-sm text-green-600 font-medium ml-2">In Stock ({product.quantity} available)</span>
            ) : (
              <span className="text-sm text-red-600 font-medium ml-2">Out of Stock</span>
            )}
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{product.description}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Material: {product.material}</p>
        </div>

        <form className="grid gap-6">
            <div className='md:flex gap-4 items-center'>
                {/* Color Selection */}
                <div>
                    {product.colors && product.colors.length > 0 && (
                        <div className="grid gap-2">
                        <Label htmlFor="color" className="text-base">
                            Color
                        </Label>
                        <RadioGroup
                            id="color"
                            defaultValue={selectedColor}
                            onValueChange={setSelectedColor}
                            className="flex items-center gap-2"
                        >
                            {product.colors.map((color: string) => (
                            <Label
                                key={color}
                                htmlFor={`color-${color.toLowerCase().replace(/\s/g, "-")}`}
                                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                            >
                                <RadioGroupItem id={`color-${color.toLowerCase().replace(/\s/g, "-")}`} value={color} />
                                {color}
                            </Label>
                            ))}
                        </RadioGroup>
                        </div>
                    )}
                </div>

                {/* Size Selection */}
                <div className='mt-4 md:mt-0'>
                    {product.sizes && product.sizes.length > 0 && (
                        <div className="grid gap-2">
                        <Label htmlFor="size" className="text-base">
                            Size
                        </Label>
                        <RadioGroup
                            id="size"
                            defaultValue={selectedSize}
                            onValueChange={setSelectedSize}
                            className="flex items-center gap-2"
                        >
                            {product.sizes.map((size: string) => (
                            <Label
                                key={size}
                                htmlFor={`size-${size.toLowerCase()}`}
                                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                            >
                                <RadioGroupItem id={`size-${size.toLowerCase()}`} value={size} />
                                {size}
                            </Label>
                            ))}
                        </RadioGroup>
                        </div>
                    )}
                </div>
            </div>
          {/* Quantity Selection */}
            <div className="grid gap-2">
        <label htmlFor="quantity" className="text-base font-medium">Quantity</label>

        <div className="flex items-center gap-2">
            {/* Decrease */}
            <Button 
            variant="outline" 
            size="icon" 
            onClick={handleDecrease} 
            disabled={!product.inStock || quantity <= 1}
            >
            <MinusIcon className="h-4 w-4" />
            </Button>

            {/* Quantity Display */}
            <div className="w-12 text-center border rounded-md py-2">{quantity}</div>

            {/* Increase */}
            <Button 
            variant="outline" 
            size="icon" 
            onClick={handleIncrease} 
            disabled={!product.inStock || quantity >= product?.quantity}
            >
            <PlusIcon className="h-4 w-4" />
            </Button>
        </div>
        </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button onClick={handleAddToCart} size="lg" className='cursor-pointer'  disabled={!product.inStock || maxQuantity === 0}>
                <ShoppingCart className="w-5 h-5 mr-2 " />
                Add to Cart
                </Button>
                <Button size="lg" onClick={handleOrderSubmit} className='cursor-pointer' variant="outline" disabled={!product.inStock || maxQuantity === 0}>
                <CreditCard className="w-5 h-5 mr-2" />
                  Buy Now
                </Button>
            </div>
            </form>
        </div>
    </div>
  )
}