import React, { useEffect } from 'react';
import Papa from 'papaparse';

const DataParser = ({ setData }) => {
  useEffect(() => {
    Papa.parse('/Data_Practice.csv', {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data;

        const months = data.map((row) => row.Month);
        const electronics = data.map((row) => parseFloat(row.Electronics) || 0);
        const clothing = data.map((row) => parseFloat(row.Clothing) || 0);
        const furniture = data.map((row) => parseFloat(row.Furniture) || 0);
        const groceries = data.map((row) => parseFloat(row.Groceries) || 0);

        setData({
          months,
          electronics,
          clothing,
          furniture,
          groceries,
        });
      },
    });
  }, [setData]);

  return <div>Loading...</div>; 
};

export default DataParser;
