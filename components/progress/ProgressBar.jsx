'use client';

import { useRef, useEffect } from 'react';

const formatValue = (value) => {
  if (value > 100) {
    return 100;
  }
  if (value < 0) {
    return 0;
  }
  return value;
};

export default function ProgressBar({
  value = 0,
  barColor = 'rgba(83, 183, 122, 1)',
}) {
  const progressBarRef = useRef(null);

  useEffect(() => {
    progressBarRef.current.style.backgroundColor = barColor;
    progressBarRef.current.style.width = formatValue(value) + '%';
  });

  const showInfo = false;

  return (
    <>
      <div className='flex w-full items-center'>
        <div className='h-2 w-full rounded-[50px] bg-[#949EAE]'>
          <div
            ref={progressBarRef}
            className='h-2 w-[0%] rounded-[50px] bg-transparent duration-1000'
          ></div>
        </div>
        {showInfo && (
          <div className='ml-2 flex shrink-0 grow-0 basis-[50px] text-right text-[#eee]'>
            {value}%
          </div>
        )}
      </div>
    </>
  );
}
