import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Protected = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://mywebsite-3h4a.onrender.com/protected', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(response.data.message);
      } catch (err) {
        console.error(err);
        alert('Failed to access protected route.');
      }
    };

    fetchProtectedData();
  }, []);

  return <div>{message}</div>;
};

export default Protected;

