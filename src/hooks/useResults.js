import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
      params: {
        term: searchTerm,
        location: 'Oslo, Norway',
        limit: 50,
      }
      });
      setResults(response.data.businesses);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  }
  
  useEffect(() => { searchApi('pizza') }, []);

  return [searchApi, results, errorMessage]
}