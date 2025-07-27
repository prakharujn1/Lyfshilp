import React from 'react';

const TermsUpdateIcon = ({
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
    <g clipPath="url(#clip0_63_492)">
      <path
        d="M10.7998 0.799988L13.2998 3.29999H18.2998V8.29999L20.7998 10.8L18.2998 13.3V18.3H13.2998L10.7998 20.8L8.2998 18.3H3.2998V13.3L0.799805 10.8L3.2998 8.29999V3.29999H8.2998M13.2998 10.8V5.79999H8.2998V10.8H5.7998L10.7998 15.8L15.7998 10.8"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_63_492">
        <rect width="20" height="20" fill="white" transform="translate(0.799805 0.799988)" />
      </clipPath>
    </defs>
  </svg>
);

export default TermsUpdateIcon;