'use client';

import { useState } from 'react';

import { cn } from '@/lib/clsx';

const Hexagon = ({
  size = 100,
  color = '',
  hoverColor = '',
  stroke = '',
  strokeOpacity = 0.8,
  strokeWidth = 1,
  text = '',
  textColor = 'green',
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
    <div className={''}>
      <div className={cn('relative block', spacing && 'mr-2')}>
        <svg
          width={size}
          height={size * 1.1547}
          stroke={stroke}
          stroke-opacity={strokeOpacity}
          stroke-width={strokeWidth}
          className={cn(
            'svgLinearGradient',
            'transform transition-colors duration-300'
          )}
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
        >
          {/* 定義漸層使用 */}
          <defs>
            <linearGradient x1='0' y1='0' x2='100%' y2='100%' id='gradient'>
              <stop stop-color='#7A96AC' />
              <stop offset='0.18' stop-color='#EAEFF3' />
              <stop offset='0.315' stop-color='#C2D4E1' />
              <stop offset='0.491919' stop-color='white' />
              <stop offset='0.615' stop-color='#D4DEE5' />
              <stop offset='0.785' stop-color='#ABBDC8' />
              <stop offset='0.955' stop-color='#BCCAD7' />
            </linearGradient>
            <linearGradient x1='0' y1='0' x2='100%' y2='100%' id='gradient2'>
              <stop stop-color='#2F6DB2' />
              <stop offset='0.172016' stop-color='#6DAAF0' />
              <stop offset='0.45741' stop-color='#518FD5' />
              <stop offset='0.553567' stop-color='#2E6CB2' />
              <stop offset='0.823421' stop-color='#2F6DB2' />
              <stop offset='0.925155' stop-color='#4482C8' />
              <stop offset='1' stop-color='#3977BD' />
            </linearGradient>
            <linearGradient x1='0' y1='0' x2='100%' y2='100%' id='gradient3'>
              <stop stop-color='white' stop-opacity='0' />
              <stop offset='1' stop-color='white' />
            </linearGradient>
          </defs>

          <polygon
            points={hexagonPoints}
            fill={'url(#gradient)'}
            className='cursor-pointer'
            // style={{ mixBlendMode: 'color' }}
          />
          {/* <polygon
            points={hexagonPoints}
            fill={'url(#gradient)'}
            className='cursor-pointer mix-blend-color'
            // style={{ mixBlendMode: 'color' }}
          /> */}
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
    </div>
  );
};

export default Hexagon;
