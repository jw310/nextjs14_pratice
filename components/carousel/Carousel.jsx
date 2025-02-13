'use client';

import { useState, useEffect } from 'react';

import { cn } from '@/lib/clsx';

const CarouselWithPreview = ({
  slides = [
    { title: '1', image: 'https://picsum.photos/500/600?random=1' },
    { title: '2', image: 'https://picsum.photos/500/600?random=2' },
    { title: '3', image: 'https://picsum.photos/500/600?random=3' },
  ],
  autoPlayInterval = 3000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getPrevIndex = () => (currentSlide - 1 + slides.length) % slides.length;
  const getNextIndex = () => (currentSlide + 1) % slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={cn('relative h-full w-full overflow-hidden')}>
      {/* 主輪播區域 */}
      <div className={cn('relative mx-auto h-full w-full')}>
        <div
          className={cn('flex h-full transition-transform duration-500')}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={cn('h-full min-w-full flex-shrink-0')}>
              <img
                src={slide.image}
                alt={slide.title}
                className={cn('h-full w-full object-cover')}
              />
            </div>
          ))}
        </div>

        {/* 導航按鈕 */}
        <button
          className={cn(
            'absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-[30px] text-white'
          )}
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className={cn(
            'absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-[30px] text-white'
          )}
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>

      {/* 左側預覽 */}
      {/* <div
        className={cn(
          'absolute left-0 top-1/2 h-3/4 w-1/6 -translate-y-1/2 opacity-50'
        )}
      >
        <img
          src={slides[getPrevIndex()].image}
          alt='Previous'
          className={cn('h-full w-full object-cover')}
        />
      </div> */}

      {/* 右側預覽 */}
      {/* <div
        className={cn(
          'absolute right-0 top-1/2 h-3/4 w-1/6 -translate-y-1/2 opacity-50'
        )}
      >
        <img
          src={slides[getNextIndex()].image}
          alt='Next'
          className={cn('h-full w-full object-cover')}
        />
      </div> */}

      {/* 指示點 */}
      <div
        className={cn(
          'absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2'
        )}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselWithPreview;
