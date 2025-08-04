export interface OrderItem {
  productId: string;
  quantity: number;
}

export interface OrderState {
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: 'COD';
  status: 'pending' | 'confirmed' | 'delivered';
}