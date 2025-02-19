'use client';

import { useState } from 'react';

import { cn } from '@/lib/clsx';

const Hexagon = ({
  size = 100,
  color = '#3B82F6',
  hoverColor = '#2563EB',
  text = '',
  textColor = 'white',
  textSize = 'text-sm',
  spacing = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const hexagonPoints = [
    [0, 0.25],
    [0.5, 0],
    [1, 0.25],
    [1, 0.75],
    [0.5, 1],
    [0, 0.75],
    //
    // [0, 0.5],
    // [0.25, 0],
    // [0.75, 0],
    // [1, 0.5],
    // [0.75, 1],
    // [0.25, 1],
  ]
    .map(([x, y]) => `${x * size},${y * size * 1.1547}`)
    .join(' ');

  return (
    <div className={cn('relative inline-block', spacing && 'mr-2')}>
      <svg
        width={size}
        height={size * 1.1547}
        className={cn('transform transition-colors duration-300')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <polygon
          points={hexagonPoints}
          fill={isHovered ? hoverColor : color}
          className='cursor-pointer'
        />
      </svg>
      <div
        className={cn(
          `absolute inset-0 flex items-center justify-center ${textSize}`
        )}
        style={{ color: textColor }}
      >
        {text}
      </div>
    </div>
  );
};

export default Hexagon;
