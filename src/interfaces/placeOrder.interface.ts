export interface OrderItem {
  productId: string;
  quantity: number;
  price?: number; 
}

export interface PlaceOrder {
  userId: string;
  items: OrderItem[];
  location: string;
  totalAmount: number;
  paymentMethod?: string;
}
