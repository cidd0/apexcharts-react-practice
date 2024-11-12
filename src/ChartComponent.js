import React, { useState } from 'react';
import DataParser from './DataParser'; 
import Graph1 from './graph1';
import Graph2 from './graph2';         
import Graph3 from './graph3';         
import Graph4 from './graph4';         

const ChartComponent = () => {
  const [chartData, setChartData] = useState({
    months: [],
    electronics: [],
    clothing: [],
    furniture: [],
    groceries: [],
  });

  return (
    <div>
      <h1>Product Sales</h1>

      <DataParser setData={setChartData} />

      {chartData.months.length > 0 && (
        <>
          <Graph1 data={chartData.groceries} categories={chartData.months}/>
          <Graph2 data={chartData.electronics} categories={chartData.months} />
          <Graph3 data={chartData.clothing} categories={chartData.months} />
          <Graph4 data={chartData.furniture} categories={chartData.months} />
        </>
      )}
    </div>
  );
};

export default ChartComponent;
