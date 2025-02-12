'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';

const INFINITE = 999999;

const formatValue = (value) => {
  if (value > 100) {
    return 100;
  }
  if (value < 0) {
    return 0;
  }
  return value;
};

export default function ProgressCircle({
  value = 0,
  circleSize = 200,
  strokeColor = '#53B77A',
}) {
  const progressCircleRef = useRef();
  const [size, setSize] = useState(circleSize);
  const defaultStrokeWidth = size * 0.08;
  const radius = (size - defaultStrokeWidth) / 2;
  const perimeter = radius * 2 * Math.PI; // 圓周長
  const argLength = perimeter * (formatValue(value) / 100); // 弧長

  // const handleUpdateSize = useCallback(() => {
  //   const currentElem = progressCircleRef.current;
  //   setSize(currentElem.clientWidth);
  // }, []);

  // useEffect(() => {
  //   handleUpdateSize();
  //   window.addEventListener('resize', handleUpdateSize);
  //   return () => {
  //     window.removeEventListener('resize', handleUpdateSize);
  //   };
  // }, [handleUpdateSize]);

  useEffect(() => {
    progressCircleRef.current.style.strokeDasharray = `${argLength} ${INFINITE}`;
    progressCircleRef.current.style.stroke = strokeColor;
  });

  return (
    <div
      // ref={progressCircleRef}
      className={`relative h-[100px]`}
    >
      <span>
        <svg
          className='-rotate-90'
          width={size}
          height={size}
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          {/* {strokeColor && (
            <defs>
              <linearGradient id='linearGradient'>
                {Object.keys(strokeColor || {}).map((offset) => (
                  <stop
                    key={offset}
                    offset={offset}
                    stopColor={strokeColor[offset]}
                  />
                ))}
              </linearGradient>
            </defs>
          )} */}
          <circle
            className={`fill-transparent stroke-[#323F52] stroke-[16px]`}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          {value > 0 && (
            <circle
              ref={progressCircleRef}
              className='fill-transparent stroke-[16px] duration-500'
              r={radius}
              cx={size / 2}
              cy={size / 2}
              strokeLinecap='round'
              strokeDasharray={`0 ${INFINITE}`}
            />
          )}
        </svg>
      </span>
      <div className='absolute left-[25%] top-[65%] flex items-center justify-center'>
        <span className={`text-[46px] font-bold text-[#53B77A]`}>{value}</span>
        <span className={`text-[46px] font-bold text-[#53B77A]`}>%</span>
      </div>
    </div>
  );
}
