'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { cn } from '@/lib/clsx';

const Carousel2 = ({
  slides = [
    { title: '1', image: 'https://picsum.photos/500/600?random=1' },
    { title: '2', image: 'https://picsum.photos/500/600?random=2' },
    { title: '3', image: 'https://picsum.photos/500/600?random=3' },
  ],
  autoPlayInterval = 3000,
}) => {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const autoPlayTimerRef = useRef(null);

  const nextSlide = useCallback(
    () => setIndex((prev) => (prev + 1) % slides.length),
    [slides.length]
  );

  const prevSlide = useCallback(
    () => setIndex((prev) => (prev - 1 + slides.length) % slides.length),
    [slides.length]
  );

  // 處理觸控開始
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);

    // 暫停自動輪播
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
  };

  // 處理觸控移動
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // 處理觸控結束
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    // 恢復自動輪播
    startAutoPlay();
  };

  // 開始自動輪播
  const startAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
    autoPlayTimerRef.current = setInterval(nextSlide, autoPlayInterval);
  }, [autoPlayInterval, nextSlide]);

  // 暫停自動輪播
  const pauseAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
  };

  // 跳轉到指定幻燈片
  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
    pauseAutoPlay();
    setTimeout(startAutoPlay, 1000); // 跳轉後延遲一秒重新開始自動輪播
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [startAutoPlay]);

  return (
    <>
      <div
        className={cn(
          'relative mx-auto flex h-full w-full items-center overflow-hidden rounded-2xl p-5 shadow-lg'
        )}
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        {/* prev button */}
        <button
          className={cn(
            'absolute left-10 z-10 rounded-full p-2 text-[30px] text-white opacity-80 transition-opacity hover:opacity-100'
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
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
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
            'absolute right-10 z-10 rounded-full p-2 text-[30px] text-white opacity-80 transition-opacity hover:opacity-100'
          )}
          onClick={nextSlide}
        >
          &gt;
        </button>
        {/* indicator inside */}
        <div
          className={cn(
            'absolute bottom-2 left-1/2 flex -translate-x-1/2 transform gap-2'
          )}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              className={cn(
                `h-2 rounded-full transition-all`,
                index === i
                  ? 'w-6 bg-white'
                  : 'w-2 bg-gray-400 hover:bg-gray-200'
              )}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        {/* prev preview */}
        <div
          className={cn(
            'absolute left-5 top-1/2 flex -translate-y-1/2 transform flex-col items-center gap-2'
          )}
          onClick={prevSlide}
        >
          <img
            src={slides[(index - 1 + slides.length) % slides.length].image}
            className={cn(
              'w-20 cursor-pointer opacity-50 transition-opacity hover:opacity-70'
            )}
            alt='prev'
          />
        </div>
        {/* next preview */}
        <div
          className={cn(
            'absolute right-5 top-1/2 flex -translate-y-1/2 transform flex-col items-center gap-2'
          )}
          onClick={nextSlide}
        >
          <img
            src={slides[(index + 1) % slides.length].image}
            className={cn(
              'w-20 cursor-pointer opacity-50 transition-opacity hover:opacity-70'
            )}
            alt='next'
          />
        </div>
      </div>
      {/* indicator outside with thumbnails */}
      <div className={cn('mt-5 flex justify-center gap-3')}>
        {slides.map((slide, i) => (
          <button
            key={i}
            className={cn(
              'overflow-hidden rounded transition-all duration-300',
              index === i
                ? 'scale-110 ring-2 ring-white ring-offset-2'
                : 'opacity-70 hover:opacity-100'
            )}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={cn('h-12 w-16 object-cover')}
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default Carousel2;
