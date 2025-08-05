export  interface ICartProduct {
  _id: string;
  name: string;
  price: number;
  image?: string;
}

export interface ICartItem {
  productId: ICartProduct;
  quantity: number;
  price: number;
  image: string;
  subtotal?: number;
}

export interface IUserCart {
  _id: string;
  userId: string;
  items: ICartItem[];
  total: number;
  createdAt: string;
  updatedAt: string;
}
