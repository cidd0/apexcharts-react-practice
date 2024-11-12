import React from 'react';
import ColumnChart from './ColumnChart';

const Graph4 = ({ data, categories }) => {
  return <ColumnChart data={data} categories={categories} name="Furniture" chartType="line" />;
};

export default Graph4;
