import React from 'react';
import ColumnChart from './ColumnChart';

const Graph3 = ({ data, categories }) => {
  return <ColumnChart data={data} categories={categories} name="Clothing" chartType="bar" />;
};

export default Graph3;
