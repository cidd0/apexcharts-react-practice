import React from 'react';
import ColumnChart from './ColumnChart';

const Graph1 = ({ data, categories }) => {
  return <ColumnChart data={data} categories={categories} name="Groceries" chartType="area" />;
};

export default Graph1;
