'use client';

import { useState, useEffect, useCallback } from 'react';

import { cn } from '@/lib/clsx';

const CarouselWithPreview = ({
  slides = [
    { title: '1', image: 'https://picsum.photos/500/600?random=1' },
    { title: '2', image: 'https://picsum.photos/500/600?random=2' },
    { title: '3', image: 'https://picsum.photos/500/600?random=3' },
  ],
  autoPlayInterval = 3000,
}) => {
  const [index, setIndex] = useState(0);
  const nextSlide = useCallback(
    () => setIndex((prev) => (prev + 1) % slides.length),
    []
  );
  const prevSlide = useCallback(
    () => setIndex((prev) => (prev - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div
      className={cn(
        'relative mx-auto flex h-full w-full items-center overflow-hidden rounded-2xl p-5 shadow-lg'
      )}
    >
      {/* prev button */}
      <button
        className={cn(
          'absolute left-10 z-10 rounded-full p-2 text-[30px] text-white opacity-80'
        )}
        onClick={prevSlide}
      >
        &lt;
      </button>
      {/* main area */}
      <div
        className={cn(
          'flex w-full items-center justify-center overflow-hidden'
        )}
      >
        <div
          className={cn('flex transition-transform duration-500 ease-in-out')}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((img, i) => (
            <div
              key={i}
              className={cn(
                'relative flex w-full flex-shrink-0 items-center justify-center'
              )}
            >
              <img src={img.image} className={cn('w-4/5')} alt={img.title} />
            </div>
          ))}
        </div>
      </div>
      {/* next button */}
      <button
        className={cn(
          'rounded-ful absolute right-10 z-10 p-2 text-[30px] text-white opacity-80'
        )}
        onClick={nextSlide}
      >
        &gt;
      </button>
      {/* indicator */}
      <div
        className={cn(
          'absolute bottom-2 left-1/2 flex -translate-x-1/2 transform gap-2'
        )}
      >
        {slides.map((_, i) => (
          <span
            key={i}
            className={cn(
              `h-2 w-2 rounded-full`,
              index === i ? 'w-4 bg-white' : 'bg-gray-400'
            )}
          />
        ))}
      </div>
      {/* prev preview */}
      <div
        className={cn(
          'absolute left-5 top-1/2 flex -translate-y-1/2 transform flex-col items-center gap-2'
        )}
      >
        <img
          src={slides[(index - 1 + slides.length) % slides.length].image}
          className={cn('w-20 opacity-50')}
          alt='prev'
        />
      </div>
      {/* next preview */}
      <div
        className={cn(
          'absolute right-5 top-1/2 flex -translate-y-1/2 transform flex-col items-center gap-2'
        )}
      >
        <img
          src={slides[(index + 1) % slides.length].image}
          className={cn('w-20 opacity-50')}
          alt='next'
        />
      </div>
    </div>
  );
};

export default CarouselWithPreview;
