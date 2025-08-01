// components/icon/ThinkingCloud.jsx

import React from 'react';

const ThinkingCloud = ({
  width = '359',
  height = '88',
  stroke = '#C3C3C3',
  strokeWidth = '2',
  className = '',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 359 88"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M42.9463 1H338.5C348.993 1.00007 357.5 9.50663 357.5 20V68C357.5 78.4934 348.993 86.9999 338.5 87H36.4463C29.5428 86.9999 23.9463 81.4035 23.9463 74.5V66.5C23.9463 62.9101 21.0361 60 17.4463 60H1.13477C1.09419 59.9809 1.06429 59.9643 1.04395 59.9502C1.02551 59.9374 1.01486 59.9269 1.00879 59.9209C1.00571 59.9178 1.00312 59.9155 1.00195 59.9141C1.00078 59.908 0.998329 59.8872 1.00293 59.8477C1.02758 59.6359 1.22148 59.242 1.63867 58.8418C6.91779 53.7738 13.0471 47.8893 17.4932 43.6211C21.6184 39.6609 23.9463 34.1935 23.9463 28.4756V20C23.9463 9.50667 32.453 1.00013 42.9463 1Z"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export default ThinkingCloud;