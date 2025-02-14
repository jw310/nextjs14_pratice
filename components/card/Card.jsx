'use client';

import { useState } from 'react';

import './Card.css';

import { cn } from '@/lib/clsx';

export default function Card({
  images = [
    {
      src: 'https://picsum.photos/500/400?random=1',
      title: 'Vancouver Mountains, Canada',
      description: 'The Great Path',
    },
    {
      src: 'https://picsum.photos/500/400?random=2',
      title: 'Vancouver Mountains, Canada2',
      description: 'The Great Path',
    },
    {
      src: 'https://picsum.photos/500/400?random=2',
      title: 'Vancouver Mountains, Canada2',
      description: 'The Great Path',
    },
  ],
}) {
  return (
    <>
      <div
        className={cn(
          'grid grid-cols-2 gap-2'
          // 'grid-flow-col'
        )}
      >
        {images.map((image, index) => (
          <div key={image.title} className={cn('')}>
            <article
              className={cn('card__article relative m-5 overflow-hidden')}
            >
              <img
                src={image.src}
                alt={image.title}
                className={cn('block rounded-md')}
              />

              <div
                className={cn(
                  'card__data',
                  'opacity-1 absolute -bottom-[9rem] left-0 right-0 mx-auto w-2/3 rounded-xl bg-gray-300 px-[1.5rem] py-[2rem]'
                )}
                style={{
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                }}
              >
                <span className={cn('mb-[0.25rem] block text-base')}>
                  {image.title}
                </span>
                <h2
                  className={cn('text-ml mb-[0.75rem] font-bold text-gray-500')}
                >
                  {image.description}
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
        ))}
      </div>
    </>
  );
}
