import apiClient from '@/utils/apiClient';
import { SIGNIN, REGISTER, GET_ME } from './endpoints';
import { storeToken } from '@/utils/auth';

export const signin = async (values: any) => {
  try {
    const response = await apiClient.post(SIGNIN, values);
    if (response.data.token) {
      storeToken(response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
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

export const getUser = async () => {
  const response = await apiClient.get(GET_ME); 
  return response.data;
};