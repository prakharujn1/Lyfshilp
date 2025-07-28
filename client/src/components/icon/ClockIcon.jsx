// components/icon/ClockIcon.jsx
import React from 'react';

const ClockIcon = ({
  width = '21',
  height = '21',
  fill = '#90A1B9', 
  className = '',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 90 90"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M45 9C25.119 9 9 25.119 9 45C9 64.881 25.119 81 45 81C64.881 81 81 64.881 81 45C81 25.119 64.881 9 45 9ZM48 48H23.985C22.335 48 21 46.665 21 45.015V44.982C21 43.335 22.335 42 23.985 42H42V17.985C42 16.335 43.335 15 44.985 15H45.018C46.665 15 48 16.335 48 17.985V48Z"
      fill={fill}
    />
  </svg>
);

export default ClockIcon;