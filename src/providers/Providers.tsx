'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
// import { SessionProvider } from "next-auth/react";
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { makeStore } from '@/store/store';

const store = makeStore();

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>

        <ReactQueryDevtools initialIsOpen={false} />
        {children}  
     <Toaster position="top-right" reverseOrder={false} />
      </Provider>
      </QueryClientProvider>
  );
}