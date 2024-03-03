import { useState } from 'react';
import axios from 'axios';

const useCRUDApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const fetchData = async (url, options) => {
    setLoading(true);
    try {
      const response = await axios(url, options);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error);
      throw error; 
    }
  };

  const create = async (url, newData) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: newData,
    };
    return fetchData(url, options);
  };

  const read = async (url) => {
    return fetchData(url);
  };

  const update = async (url, updatedData) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: updatedData,
    };
    return fetchData(url, options);
  };

  const remove = async (url) => {
    const options = {
      method: 'DELETE',
    };
    return fetchData(url, options);
  };

  return {
    loading,
    error,
    create,
    read,
    update,
    remove,
  };
};

export default useCRUDApi;
