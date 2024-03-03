import React, { useState, useEffect } from 'react';
import useCRUDApi from './useCRUDApi';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const { loading, error, create, read, update, remove } = useCRUDApi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await read('https://example.com/api/data');
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [data]); // Add 'data' as a dependency


  
  const handleCreate = async (newData) => {
    try {
      await create('https://example.com/api/data', newData);
      // Refetch data after creation
      setData(await read('https://example.com/api/data'));
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await update(`https://example.com/api/data/${id}`, updatedData);
      // Refetch data after update
      setData(await read('https://example.com/api/data'));
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await remove(`https://example.com/api/data/${id}`);
      // Refetch data after deletion
      setData(await read('https://example.com/api/data'));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      {/* Your component rendering and UI */}
    </div>
  );
};

export default MyComponent;
