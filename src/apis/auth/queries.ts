// src/app/apis/hooks.ts
import { useMutation, useQuery } from '@tanstack/react-query';
import { getUser, signin, signup, updatePassword } from './apis';

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      return await signup(data);
    },
  });
};

export const useSigninMutation = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      return await signin(data);
    },
    onError: (error: any) => {
      console.error('Mutation error:', error.response?.data?.error || error.message);
      alert(error.response?.data?.error || 'Login failed');
    },
  });
};

export const useUpdatePasswordMutation = () => {
  return useMutation({
    mutationFn: async (data: { 
      email: string; 
      name: string; 
      phone: string; 
      newPassword: string; 
    }) => {
      return await updatePassword(data);
    },
  });
};

export const useGetUserQuery = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
};