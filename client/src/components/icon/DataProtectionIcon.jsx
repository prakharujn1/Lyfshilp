// components/icon/DataProtectionIcon.jsx
import React from 'react';

const DataProtectionIcon = ({
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
    <g clipPath="url(#clip0_63_1049)">
      <mask id="mask0_63_1049" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="2" y="1" width="18" height="20">
        <path d="M3.30078 4.65664L10.8045 2.46664L18.3008 4.65664V9.14748C18.3005 11.449 17.5761 13.692 16.2303 15.559C14.8845 17.4259 12.9854 18.8222 10.802 19.55C8.61785 18.8225 6.71799 17.4261 5.37166 15.5587C4.02533 13.6913 3.30081 11.4475 3.30078 9.14539V4.65664Z" fill="white" stroke="white" strokeWidth="1.66667" strokeLinejoin="round" />
        <path d="M7.05078 10.3833L9.96745 13.3L14.9674 8.29999" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      </mask>
      <g mask="url(#mask0_63_1049)">
        <path d="M0.800781 0.799988H20.8008V20.8H0.800781V0.799988Z" fill={fill} />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_63_1049">
        <rect width="20" height="20" fill="white" transform="translate(0.800781 0.799988)" />
      </clipPath>
    </defs>
  </svg>
);

export default DataProtectionIcon;