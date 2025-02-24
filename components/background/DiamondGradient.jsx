'use client';

import React from 'react';

const DiamondGradient = ({
  width = 200,
  height = 200,
  colors = ['#ff7eb3', '#ff758c'],
}) => {
  const gradientId = 'diamond-gradient';

  return (
    <svg width={width} height={height} viewBox='0 0 100 100' className='block'>
      <defs>
        <linearGradient id={gradientId} x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor={colors[0]} />
          <stop offset='100%' stopColor={colors[1]} />
        </linearGradient>
      </defs>
      <rect
        x='25'
        y='25'
        width='50'
        height='50'
        transform='rotate(45 50 50)'
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
};

export default DiamondGradient;
