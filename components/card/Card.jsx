'use client';

import { useState } from 'react';

import './Card.css';

import { cn } from '@/lib/clsx';

export default function Card({}) {
  return (
    <>
      <div className={cn('')}>
        <article
          className={cn(
            'group relative overflow-hidden'
            // '[&:not(:hover)]:animate-showOverflow [&:not(:hover)]:removeData'
          )}
        >
          <img
            src='https://picsum.photos/500/400?random=1'
            alt='image'
            className={cn('block h-auto max-w-full')}
          />

          <div
            className={cn(
              'absolute bottom-[1.5rem] left-0 right-0 w-[280px] bg-white px-[1.5rem] py-[2rem] opacity-0',
              // 'group-hover:animate-showData group-hover::opacity-1 group-hover::duration-[3s] rounded-[1rem]'
              'group-hover:opacity-1'
            )}
            style={{
              boxShadow: '0 8px 24px hsla(0, 0%, 0%, 0.15)',
              transition: 'opacity 1s 1s',
              marginInline: 'auto',
            }}
          >
            <span className={cn('mb-[0.25rem] block text-base')}>
              Vancouver Mountains, Canada
            </span>
            <h2 className={cn('text-ml mb-[0.75rem] font-bold text-gray-500')}>
              The Great Path
            </h2>
            <a
              href='#'
              className={cn(
                'decoration-none text-base font-medium text-black',
                'hover:underline'
              )}
            >
              Read More
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
