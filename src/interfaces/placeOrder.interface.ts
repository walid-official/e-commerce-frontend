export interface placeOrder {
  userId: string;
  items: any[];
  location: string;
  totalAmount: number;
  paymentMethod?: string;
}