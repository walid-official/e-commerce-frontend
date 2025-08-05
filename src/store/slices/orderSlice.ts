import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OrderItem {
  productId: string;
  quantity: number;
}

export interface OrderState {
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
}

const initialState: OrderState = {
  userId: '',
  items: [],
  totalAmount: 0,
  paymentMethod: 'COD',
  status: 'pending',
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderData: (state, action: PayloadAction<OrderState>) => {
      return action.payload;
    },
    resetOrder: () => initialState,
  },
});

export const { setOrderData, resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
