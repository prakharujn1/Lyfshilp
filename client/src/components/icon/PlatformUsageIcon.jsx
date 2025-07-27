import React from 'react';

const PlatformUsageIcon = ({
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
    viewBox="0 0 21 21"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M18.2998 5.51082L10.7982 1.17499L3.29984 5.50999L10.7998 9.83832L18.2998 5.51082ZM19.1315 6.95499L11.6315 11.2817V19.9442L19.1315 15.6083V6.95499ZM9.96484 19.9383V11.2808L2.46484 6.95249V15.55L9.96484 19.9383Z"
      fill={fill}
    />
  </svg>
);

export default PlatformUsageIcon;