'use client';

import { usestate } from 'react';

import { cn } from '@/lib/clsx';

export default function DiamondGradient({
  width = 300,
  height = 300,
  startColor = '#4F46E5', // Indigo-600
  endColor = '#7C3AED', // Violet-600
  gradientAngle = 45, // 漸層角度
  strokeWidth = 2, // 邊框寬度
  strokeColor = '#312E81', // Indigo-900
}) {
  // 計算菱形的點
  const points = `${width / 2},0 ${width},${height / 2} ${width / 2},${height} 0,${height / 2}`;

  // 計算漸層的起點和終點
  const getGradientCoordinates = (angle) => {
    const radian = (angle * Math.PI) / 180;
    const length = Math.max(width, height);

    return {
      x1: '0%',
      y1: '0%',
      x2: Math.cos(radian) * 100 + '%',
      y2: Math.sin(radian) * 100 + '%',
    };
  };

  const gradientCoords = getGradientCoordinates(gradientAngle);

  return (
    <div className='inline-block'>
      <svg viewBox={`0 0 ${width} ${height}`} className='h-full w-full'>
        <defs>
          <linearGradient id='diamondGradient' {...gradientCoords}>
            <stop offset='0%' stopColor={startColor} />
            <stop offset='100%' stopColor={endColor} />
          </linearGradient>

          <linearGradient
            id='paint0_diamond_1407_573'
            x1='0'
            y1='0'
            x2='100%'
            y2='100%'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#7B00FF' />
            <stop offset='0.93' stop-color='white' stop-opacity='0' />
          </linearGradient>
        </defs>

        <polygon
          points={points}
          fill='url(#paint0_diamond_1407_573)'
          // stroke={strokeColor}
          // strokeWidth={strokeWidth}
          className='transition-all duration-300'
        />
      </svg>
    </div>
  );
}
