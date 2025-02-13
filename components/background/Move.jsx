'use client';

import { useState } from 'react';

import './Move.css';

import { cn } from '@/lib/clsx';

export default function Move() {
  return (
    <>
      <div
        className={cn(
          'absolute z-[-10] h-[500px] w-[500px] bg-yellow-600 mix-blend-overlay'
        )}
        style={{ animation: 'move 15s linear infinite alternate' }}
      ></div>
    </>
  );
}
