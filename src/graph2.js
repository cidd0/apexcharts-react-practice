import React from 'react';
import ColumnChart from './ColumnChart';

const Graph2 = ({ data, categories }) => {
  return <ColumnChart data={data} categories={categories} name="Electronics" chartType="bar" />;
};

export default Graph2;
