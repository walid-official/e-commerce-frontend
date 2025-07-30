import apiClient from '@/utils/apiClient';
import { SIGNIN, REGISTER, GET_ME, UPDATE_PASSWORD } from './endpoints';
import { storeToken } from '@/utils/auth';

export const signin = async (values: { emailOrPhone: string; password: string }) => {
  try {
    const response = await apiClient.post(SIGNIN, values);
    if (response.data.token) {
      storeToken(response.data.token);
    }
    return response.data;
  } catch (error: any) {
    console.error('Error logging in:', error.response?.data?.error || error.message);
    throw new Error(error.response?.data?.error || 'Login failed');
  }
};

export const signup = async (values: any) => {
  try {
    const response = await apiClient.post(REGISTER, values);
    if (response.data.token) {
      storeToken(response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const updatePassword = async (values: { 
  email: string;
  name: string;
  phone: string;
  newPassword: string;
}) => {
  try {
    const response = await apiClient.put(UPDATE_PASSWORD, values);
    return response.data;
  } catch (error) {
    console.error("Error updating password:", error);
    throw error;
  }
};


export const getUser = async () => {
  const response = await apiClient.get(GET_ME); 
  return response.data;
};

