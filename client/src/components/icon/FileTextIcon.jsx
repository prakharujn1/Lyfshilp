// components/icon/FileTextIcon.jsx
import React from 'react';

const FileTextIcon = ({
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
      d="M74.121 26.379L54.621 6.879C54.057 6.315 53.295 6 52.5 6H21C17.685 6 15 8.685 15 12V78C15 81.315 17.685 84 21 84H69C72.315 84 75 81.315 75 78V28.5C75 27.705 74.685 26.943 74.121 26.379ZM54 63H30C28.344 63 27 61.656 27 60C27 58.344 28.344 57 30 57H54C55.656 57 57 58.344 57 60C57 61.656 55.656 63 54 63ZM60 51H30C28.344 51 27 49.656 27 48C27 46.344 28.344 45 30 45H60C61.656 45 63 46.344 63 48C63 49.656 61.656 51 60 51ZM54 30C52.344 30 51 28.656 51 27V11.712L69.288 30H54Z"
      fill={fill}
    />
  </svg>
);

export default FileTextIcon;