'use client';

import { useState } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/clsx';

const contentArray = [
  {
    src: 'https://picsum.photos/500/500?random=1',
    title: 'sectionFiveTitleAA',
    content: 'sectionFiveContentAA',
  },
];

const TabContent = () => {
  return (
    <>
      <div className={cn('h-full w-full bg-transparent')}>
        {contentArray.map((el, index) => (
          <div className='relative h-[214px] w-[300px] lg:flex lg:h-full lg:w-full lg:items-center lg:justify-around odd:lg:flex-row-reverse'>
            <div className={'flex justify-center lg:flex-none'}>
              <div
                className={cn(
                  'absolute h-[166px] w-[166px] lg:static lg:h-[396px] lg:w-[396px]'
                )}
              >
                <Image
                  src={el.src}
                  alt={`${el.src}-image}`}
                  // fill={true}
                  priority={true}
                  width={166}
                  height={166}
                  unoptimized={true}
                  className={'opacity-50 lg:opacity-100'}
                  style={{ height: '100%', width: '100%' }}
                />
              </div>
            </div>
            <div
              className='absolute flex flex-col items-center gap-5 p-3 lg:static lg:w-full
           lg:flex-1 lg:items-start lg:p-0 lg:pr-[50px]'
            >
              <h1
                className={
                  'text-center text-[24px] font-bold text-grey-500 lg:text-left lg:text-[36px]'
                }
              >
                {el.title}
              </h1>
              <p className='mb-5 text-left text-xs font-bold leading-8 text-black lg:text-[18px] lg:font-normal lg:leading-9'>
                {el.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TabContent;
