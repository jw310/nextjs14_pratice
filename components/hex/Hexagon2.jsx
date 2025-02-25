'use client';

import React from 'react';

const Hexagon2 = ({
  size = 100, // 六邊形的外接圓直徑
  outerBorderWidth = 4, // 外層邊界寬度
  innerBorderWidth = 2, // 內層邊界寬度
  outerBorderColor = 'black', // 外層邊界顏色
  innerBorderColor = 'gray', // 內層邊界顏色
  fillColor = 'white', // 填充顏色
  strokeOpacity = 0.8,
  strokeWidth = 10,
}) => {
  // 計算正六邊形的點
  const calculatePoints = (radius) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = ((60 * i - 30) * Math.PI) / 180;
      const x = radius + radius * Math.cos(angle);
      const y = radius + radius * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  };

  // 計算不同半徑的六邊形點
  const radius = size / 2;
  const outerPoints = calculatePoints(radius);
  // const middlePoints = calculatePoints(radius - outerBorderWidth);
  const innerPoints = calculatePoints(
    radius - outerBorderWidth - innerBorderWidth
  );

  return (
    <div className='inline-block'>
      <svg
        // width={size}
        // height={size * 1.1547}
        className={'relative flex h-full w-full items-center'}
        viewBox={`0 0 ${size} ${size}`}
        stroke-opacity={strokeOpacity}
        stroke-width={strokeWidth}
        // className='h-full w-full'
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
        {/* 外層邊界 */}
        <polygon points={outerPoints} fill={outerBorderColor} />

        {/* 中間層 */}
        {/* <polygon points={middlePoints} fill={innerBorderColor} /> */}

        {/* 內層填充 */}
        <polygon
          className={'translate-x-[5px] translate-y-[5px]'}
          points={innerPoints}
          fill={'url(#gradient)'}
        />
      </svg>
    </div>
  );
};

export default Hexagon2;
