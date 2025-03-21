'use client';

import { useRef, useEffect } from 'react';

import { cn } from '@/lib/clsx';

// const sin60 = 2 / Math.sqrt(3);
// const r = 100;
/**
 * https://www.cnblogs.com/wisewrong/p/12202197.html
 * */

export default function Hex({ size, spacing, children }) {
  return (
    <>
      <div className={cn('bg-transparent', spacing && 'mr-2')}>
        <div
          className={cn(
            'relative border-l-2 border-r-2 border-gray-900',
            'border-[linear-gradient(138deg, #7A96AC 2.28%, #EAEFF3 19.8%, #C2D4E1 32.94%, #FFF 50.16%, #D4DEE5 62.15%, #ABBDC8 78.69%, #BCCAD7 95.24%)]'
          )}
          style={{
            height: `${size}` / Math.sqrt(3) + 'px',
            width: `${size + 2}px`,
          }}
        >
          <div
            className={cn(
              'absolute rotate-[-60deg] border-l-2 border-r-2 border-gray-900',
              'border-[linear-gradient(138deg, #7A96AC 2.28%, #EAEFF3 19.8%, #C2D4E1 32.94%, #FFF 50.16%, #D4DEE5 62.15%, #ABBDC8 78.69%, #BCCAD7 95.24%)]'
            )}
            style={{
              height: `${size}` / Math.sqrt(3) + 'px',
              width: `${size}px`,
            }}
          ></div>
          <div
            className={cn(
              'absolute rotate-[60deg] border-l-2 border-r-2 border-gray-900',
              'border-[linear-gradient(138deg, #7A96AC 2.28%, #EAEFF3 19.8%, #C2D4E1 32.94%, #FFF 50.16%, #D4DEE5 62.15%, #ABBDC8 78.69%, #BCCAD7 95.24%)]'
            )}
            style={{
              height: `${size}` / Math.sqrt(3) + 'px',
              width: `${size}px`,
            }}
          ></div>
          {children}
        </div>
      </div>
      {/* <div
        className={cn(
          `relative h-[${size}px] w-[${size}px]`,
          spacing && 'mr-5'
        )}
      >
        <div
          className={cn(
            `absolute rotate-[90deg] border-b-2 border-t-2 border-black`
          )}
          style={{
            width: `${size}` / Math.sqrt(3) + 'px',
            height: `${size}` + 'px',
          }}
        ></div>
        <div
          className={cn(
            `absolute rotate-[150deg] border-b-2 border-t-2 border-black`
          )}
          style={{
            width: `${size}` / Math.sqrt(3) + 'px',
            height: `${size}` + 'px',
          }}
        ></div>
        <div
          className={cn(
            'absolute rotate-[210deg] border-b-2 border-t-2 border-black'
          )}
          style={{
            width: `${size}` / Math.sqrt(3) + 'px',
            height: `${size}` + 'px',
          }}
        ></div>
      </div> */}
    </>
  );
}
