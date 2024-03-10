import axios from 'axios';
import dotenv from 'dotenv';
import type { BaseResponse } from './types';
import { Resource, ResourceRequestBody } from '@entities/Resource';

dotenv.config();
const baseURL = process.env.REACT_APP_API_URL;

interface ResourcesResponse extends BaseResponse {
  data?: Resource[][];
}

interface ResourceResponse extends BaseResponse {
  data?: Resource;
}

export const createResource = async (reqBody: ResourceRequestBody, access_token: string | undefined): Promise<ResourceResponse> => {
  try {
    const res = await axios.post(`${baseURL}/api/resources`,
      reqBody,
      {
        headers: {
          authorization: access_token,
        }
      }
    );
    return res.data as ResourceResponse;
  } catch (err: any) {
    return err.response.data as BaseResponse;
  }
}

export const getAllResourcesInCategory = async (category: string): Promise<ResourcesResponse> => {
  try {
    const res = await axios.get(`${baseURL}/api/resources/${category}`);
    return res.data as ResourcesResponse;
  } catch (err: any) {
    return err.response.data as BaseResponse;
  }
}

export const getResourceById = async (id: string): Promise<ResourceResponse> => {
  try {
    const res = await axios.get(`${baseURL}/api/resources/${id}`);
    return res.data as ResourceResponse;
  } catch (err: any) {
    return err.response.data as BaseResponse;
  }
}

export const updateResource = async (reqBody: ResourceRequestBody, id: string, access_token: string): Promise<ResourceResponse> => {
  try {
    const res = await axios.patch(`${baseURL}/api/resources/${id}`,
      reqBody,
      {
        headers: {
          authorization: access_token,
        }
      }
    );
    return res.data as ResourceResponse;
  } catch (err: any) {
    return err.response.data as BaseResponse;
  }
}

export const deleteResource = async (id: string, username: string | undefined, access_token: string | undefined): Promise<BaseResponse> => {
  try {
    const res = await axios.delete(`${baseURL}/api/resources/${id}`,
      {
        headers: {
          authorization: access_token,
          username
        }
      }
    );
    return res.data as BaseResponse;
  } catch (err: any) {
    return err.response.data as BaseResponse;
  }
}