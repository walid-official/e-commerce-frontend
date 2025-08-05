import apiClient from '@/utils/apiClient';
import { SIGNIN, REGISTER, GET_ME, UPDATE_PASSWORD, GET_ALL_USERS, GET_USER_BY_ID } from './endpoints';
import { storeToken } from '@/utils/auth';

interface SigninValues {
  emailOrPhone: string;
  password: string;
}

interface SignupValues {
  name: string;
  email: string;
  phone: string;
  password: string;
  [key: string]: unknown; // If extra fields may exist
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

// ✅ SIGNIN
export const signin = async (values: SigninValues) => {
  try {
    const response = await apiClient.post(SIGNIN, values);
    if (response.data.token) {
      storeToken(response.data.token);
    }
    return response.data;
  } catch (error) {
    const err = error as ApiError;
    console.error('Error logging in:', err.response?.data?.error || err.message);
    throw new Error(err.response?.data?.error || 'Login failed');
  }
};

// ✅ SIGNUP
export const signup = async (values: SignupValues) => {
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

// ✅ UPDATE PASSWORD
export const updatePassword = async (values: UpdatePasswordValues) => {
  try {
    const response = await apiClient.put(UPDATE_PASSWORD, values);
    return response.data;
  } catch (error) {
    console.error("Error updating password:", error);
    throw error;
  }
};

// ✅ GET CURRENT USER
export const getUser = async () => {
  const response = await apiClient.get(GET_ME); 
  return response.data;
};

// ✅ GET ALL USERS
export const getAllUsers = async () => {
  const response = await apiClient.get(GET_ALL_USERS);
  return response.data;
};

// ✅ GET USER BY ID
export const getUserById = async (userId: string) => {
  const response = await apiClient.get(GET_USER_BY_ID(userId));
  return response.data;
};
