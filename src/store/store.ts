import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './slices/orderSlice';

const ORDER_KEY = 'orderState';

function loadOrderState(): ReturnType<typeof orderReducer> | undefined {
  if (typeof window === 'undefined') return undefined;
  try {
    const serialized = localStorage.getItem(ORDER_KEY);
    if (serialized === null) return undefined;
    return JSON.parse(serialized);
  } catch (e) {
    console.error('Failed to load order from localStorage', e);
    return undefined;
  }
}

function saveOrderState(state: AppState) {
  try {
    const serialized = JSON.stringify(state.order);
    localStorage.setItem(ORDER_KEY, serialized);
  } catch (e) {
    console.error('Failed to save order to localStorage', e);
  }
}

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      order: orderReducer,
    },
    preloadedState: {
      order: loadOrderState() ?? orderReducer(undefined, { type: '@@INIT' }),
    },
  });

  store.subscribe(() => {
    saveOrderState(store.getState());
  });

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
