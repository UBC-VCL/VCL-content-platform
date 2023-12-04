import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Authorization'] = process.env.API_KEY;
//axios.defaults.headers.common['key'] = process.env.API_KEY;

const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
    const result = await axios.request(params);
    setResponse(result.data);
    } catch( err ) {
    setError(err as AxiosError);
    } finally {
    setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  },[]);

  return { response, error, loading };
}

export default useAxios;