import axios from 'axios';
import type { BaseResponse } from './types';

const baseURL = process.env.REACT_APP_API_URL;

export type UserType = 'default' | 'member' | 'admin';

interface LoginResponse extends BaseResponse {
  data?: {
    access_token: string;
    refresh_token: string;
    username: string;
    permissions: UserType;
  };
}

export const loginUser = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const res = await axios.post(
      '/api/users/login',
      {
        username,
        password,
      },
      {
        baseURL,
      }
    );

    return res.data as LoginResponse;
  } catch (err: any) {
    return err.response.data as BaseResponse;
  }
};

interface CheckAuthResponse extends BaseResponse {
  data?: {
    access_token: string;
  };
}

export const checkAuth = async (
  refresh_token: string
): Promise<CheckAuthResponse> => {
  try {
    const res = await axios.get('/api/tokens/access_token', {
      baseURL,
      headers: {
        authorization: refresh_token,
      },
    });

    return res.data as CheckAuthResponse;
  } catch (err: any) {
    return err.response.data as BaseResponse;
  }
};

export const logoutUser = async (
  access_token: string
): Promise<BaseResponse> => {
  try {
    const res = await axios.post('/api/users/logout', null, {
      baseURL,
      headers: {
        authorization: access_token,
      },
    });

    return res.data as BaseResponse;
  } catch (err: any) {
    return err.response.data as BaseResponse;
  }
};
