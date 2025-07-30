// src/app/apis/hooks.ts
import { useMutation, useQuery } from '@tanstack/react-query';
import { getUser, signin, signup } from './apis';

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