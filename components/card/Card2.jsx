'use client';

import { useState } from 'react';

import { cn } from '@/lib/clsx';

export default function Card2({ images }) {
  return (
    <>
      <div
        className={cn('group relative block cursor-pointer overflow-hidden')}
      >
        <img
          src='https://picsum.photos/500/400?random=1'
          alt='img1'
          className={cn('h-full w-full')}
        />
        <div
          className={cn(
            'opacity-1 bg-white-800/70 z-1 absolute h-full w-full text-center'
          )}
        >
          <h1>Test</h1>
        </div>
      </div>
    </>
  );
}