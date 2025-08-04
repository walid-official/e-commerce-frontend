import { OrderState } from '@/interfaces/orderStore.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState: OrderState = {
  userId: '',
  items: [],
  totalAmount: 0,
  paymentMethod: 'COD',
  status: 'pending'
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
