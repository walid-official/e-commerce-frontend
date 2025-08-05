
export const REGISTER = '/api/users/signup';
export const SIGNIN = '/api/users/login';
export const UPDATE_PASSWORD = '/api/users/update-password';
export const GET_ALL_USERS = '/api/users';
export const GET_USER_BY_ID = (userId: string) => `api/users/${userId}`;
export const GET_ME = '/api/users/me';