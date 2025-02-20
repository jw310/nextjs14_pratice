'use client';

import { useState } from 'react';

import { cn } from '@/lib/clsx';

import './Card2.css';

export default function Card2({ image, text }) {
  return (
    <>
      <div
        className={cn(
          'card',
          'relative h-full w-full cursor-pointer overflow-hidden rounded-md'
        )}
      >
        <img
          src='https://picsum.photos/500/400?random=1'
          alt='img1'
          className={cn('h-full w-full')}
        />
        <div
          className={cn(
            'mask',
            'absolute left-0 top-0 h-full w-full bg-gray-800/70 text-center opacity-0'
          )}
        >
          <h1
            className={cn(
              'absolute w-full text-white transition-all duration-300 ease-in-out'
            )}
          >
            {text}
          </h1>
        </div>
      </div>
    </>
  );
}
