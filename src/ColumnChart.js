import React from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = ({ data, categories, name, chartType }) => {
  const options = {
    chart: {
      type: chartType || 'bar',  
      height: 350,
    },
    xaxis: {
      categories, 
    },
    title: {
      text: `${name} Sales`,
      align: 'center',
    },
  };

  const series = [
    {
      name: name,  
      data: data, 
    },
  ];

  return <Chart options={options} series={series} type={chartType || 'bar'} height={350} />;
};

export default ColumnChart;
