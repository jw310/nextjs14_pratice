'use client';

import { useState } from 'react';

import { cn } from '@/lib/clsx';

export default function SurroundLightBtn({ text }) {
  return (
    <button
      className={cn(
        'relative overflow-hidden rounded-md px-6 py-3 text-xl font-bold tracking-wide',
        'flex items-center justify-center bg-gray-300'
      )}
    >
      <span
        className={cn(
          'absolute -left-[100%] top-0 block h-1 w-full',
          'animate-animationLeft'
        )}
        style={{
          background: 'linear-gradient(90deg, transparent, #03e9f4)',
        }}
      ></span>
      <span
        className={cn(
          'absolute -top-[100%] right-0 block h-full w-1',
          'animate-animationTop'
        )}
        style={{
          background: 'linear-gradient(180deg, transparent, #03e9f4)',
          animationDelay: '0.5s',
        }}
      ></span>
      <span
        className={cn(
          'absolute -right-[100%] bottom-0 h-1 w-full',
          'animate-animationRight'
        )}
        style={{
          background: 'linear-gradient(270deg, transparent, #03e9f4)',
          animationDelay: '1s',
        }}
      ></span>
      <span
        className={cn(
          'absolute -bottom-[100%] left-0 h-full w-1',
          'animate-animationBottom'
        )}
        style={{
          background: 'linear-gradient(360deg, transparent, #03e9f4)',
          animationDelay: '1.5s',
        }}
      ></span>
      {text}
    </button>
  );
}
