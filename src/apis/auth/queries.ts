// src/app/apis/hooks.ts

import { useMutation, useQuery } from '@tanstack/react-query';
import { 
  getAllUsers, 
  getUser, 
  getUserById, 
  signin, 
  signup, 
  updatePassword 
} from './apis';

interface SigninValues {
  emailOrPhone: string;
  password: string;
}

interface SignupValues {
  name: string;
  email: string;
  phone: string;
  password: string;
  [key: string]: unknown; 
}

interface UpdatePasswordValues {
  email: string;
  name: string;
  phone: string;
  newPassword: string;
}

interface ApiError {
  response?: {
    data?: {
      error?: string;
    };
  };
  message: string;
}

//  Signup Mutation
export const useSignupMutation = () => {
  return useMutation({
    mutationFn: async (data: SignupValues) => {
      return await signup(data);
    },
  });
};

// Signin Mutation
export const useSigninMutation = () => {
  return useMutation({
    mutationFn: async (data: SigninValues) => {
      return await signin(data);
    },
    onError: (error: unknown) => {
      const err = error as ApiError;
      console.error('Mutation error:', err.response?.data?.error || err.message);
      alert(err.response?.data?.error || 'Login failed');
    },
  });
};

// ✅ Update Password Mutation
export const useUpdatePasswordMutation = () => {
  return useMutation({
    mutationFn: async (data: UpdatePasswordValues) => {
      return await updatePassword(data);
    },
  });
};

// ✅ Get current user
export const useGetUserQuery = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
};

// ✅ Get all users
export const useGetAllUsersQuery = () => {
  return useQuery({
    queryKey: ['allUsers'],
    queryFn: getAllUsers,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
};

// ✅ Get user by ID
export const useGetUserByIdQuery = (userId: string) => {
  return useQuery({
    queryKey: ['userById', userId],
    queryFn: () => getUserById(userId),
    enabled: !!userId, 
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
};
