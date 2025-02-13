'use client';

import { useState } from 'react';

import { cn } from '@/lib/clsx';

export default function BallMove({ children }) {
  return (
    <>
      <div className={cn('relative h-full w-full bg-gray-100')}>
        <div
          className={cn(
            'absolute z-10 h-full w-full bg-[#ffffff8c] mix-blend-overlay backdrop-blur-[8px]',
            'flex items-center justify-center'
          )}
        >
          {children}
        </div>
        <div
          className={cn(
            'absolute h-20 w-20 animate-moveOne rounded-[50%] bg-green-600'
          )}
        ></div>
        <div
          className={cn(
            'absolute h-20 w-20 animate-moveTwo rounded-[50%] bg-yellow-600'
          )}
        ></div>
      </div>
    </>
  );
}
