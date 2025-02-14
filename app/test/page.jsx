'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useFormState } from 'react-dom';

import { cn } from '@/lib/clsx';

import chevronDownIcon from '@/assets/chevron-down.svg';

import { testPOST } from '@/actions/test';

import SurroundLightBtn from '@/components/button/SurroundLightBtn';
import Hex from '@/components/hex/hex';
import Hexagon from '@/components/hex/hexagon';
import TabGroup from '@/components/tab/tabGroup';
import Carousel from '@/components/carousel/Carousel';
import CarouselWithPreview from '@/components/carousel/CarouselWithPreview';
import BallMove from '@/components/background/BallMove';
import Move from '@/components/background/Move';
import Glassmorphism from '@/components/background/Glassmorphism';
import Card from '@/components/card/Card';

export default function TestPage() {
  const [state, formAction] = useFormState(testPOST, {});
  // console.log(state);

  // Tabs
  const Tab1Content = () => <div>Tab 1 Content</div>;
  const Tab2Content = () => <div>Tab 2 Content</div>;

  const tabs = [
    { label: 'Tab 1', content: <Tab1Content /> },
    { label: 'Tab 2', content: <Tab2Content /> },
  ];

  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <Image
        src={chevronDownIcon}
        alt='chevronDownIcon'
        width={30}
        height={30}
        className='relative animate-ping'
        priority
      />
      <form action={formAction} className='flex flex-col gap-4'>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name='title' />
        <p className='form-control'>
          <label htmlFor='content'>Content</label>
          <textarea id='content' name='content' rows='5' />
        </p>
        <button className='m-auto text-gray-200'>
          <div className='group relative overflow-hidden rounded-lg bg-gray-200 px-6 py-3 [transform:translateZ(0)] before:absolute before:left-1/2 before:top-1/2 before:h-8 before:w-8 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-[0] before:rounded-full before:bg-sky-600 before:opacity-0 before:transition before:duration-500 before:ease-in-out hover:before:scale-[6] hover:before:opacity-100'>
            <span className='relative z-0 text-black transition duration-500 ease-in-out group-hover:text-gray-200'>
              Post test
            </span>
          </div>
        </button>
      </form>
      {/* Button */}
      <div className='m-auto rounded-lg bg-gray-600 px-6 py-3 text-gray-200'>
        <div className='group relative overflow-hidden'>
          <span className='invisible'>Hover over me</span>
          <span className='absolute left-0 top-0 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full'>
            Hover over me
          </span>
          <span className='absolute left-0 top-0 translate-y-full transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0'>
            Hover over me
          </span>
        </div>
      </div>
      <div className='m-auto text-gray-200'>
        <div className='rounded-lg bg-gray-200 px-6 py-3 text-black transition-transform duration-200 ease-in-out hover:scale-110 active:scale-90'>
          Hover &amp; hold me
        </div>
      </div>
      <div className='m-auto text-gray-200'>
        <div className='animate-textShimmer bg-[linear-gradient(110deg,#e2e8f0,45%,#1e293b,55%,#e2e8f0)] bg-[length:250%_100%] bg-clip-text text-transparent'>
          Text Shimmer Effect
        </div>
      </div>
      <div className='m-auto rounded-lg bg-gray-600 px-6 py-3 text-gray-200'>
        <div className='relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-200 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100'>
          Hover over me
        </div>
      </div>
      <Link href='/ssh' legacyBehavior className='m-auto text-gray-200'>
        <a target='_blank'>
          <div className='group relative overflow-hidden rounded-lg bg-gray-200 px-6 py-3 [transform:translateZ(0)] before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:bg-sky-600 before:transition before:duration-500 before:ease-in-out hover:before:translate-x-0'>
            <span className='relative z-0 text-black transition duration-500 ease-in-out group-hover:text-gray-200'>
              SSH
            </span>
          </div>
        </a>
      </Link>
      <div className='flex flex-col items-center justify-center'>
        <button className='relative overflow-hidden rounded-md px-6 py-3 text-xl font-bold uppercase tracking-wide text-white before:absolute before:inset-1 before:rounded-md before:bg-gray-500'>
          <span className='relative z-10'>Click Me</span>
          {/* <div className='absolute inset-1 bg-gray-900'></div> */}
          <div
            className='absolute inset-0 z-[-1] animate-spin'
            style={{
              background: 'conic-gradient(#45ffd8, #bfff45, #45ffd8, #bfff45)',
              // background: 'linear-gradient(to bottom, #45ffd8, #bfff45)',
            }}
          ></div>
        </button>
      </div>

      <div>
        <SurroundLightBtn text={'Click Me'} />
      </div>

      {/* <div className='flex flex-col items-center justify-center'>
        <button
          className={cn(
            'relative overflow-hidden rounded-md px-6 py-3 text-xl font-bold tracking-wide',
            'before:absolute before:inset-[3px] before:rounded-md before:bg-gray-500'
          )}
        >
          <span className='z-3 relative'>Click Me</span>
          <div
            className={cn(
              'absolute inset-0 left-1/2 top-1/2 z-[-1] origin-[0%_0%] animate-spin',
              'bg-gradient-to-r from-cyan-500 to-blue-500'
            )}
          ></div>
        </button>
      </div> */}

      {/* loading */}
      <div className='m-auto text-gray-200'>
        <svg
          className='h-8 w-8 animate-spin text-black'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          ></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
      </div>
      {/* Hex */}
      <div className='mt-10 flex'>
        <Hex size={100} spacing={true}>
          {/* <div className='flex flex-col items-center justify-center'>223</div> */}
        </Hex>
        <Hex size={200} spacing={true}>
          {/* <div className='flex flex-col items-center justify-center'>123</div> */}
        </Hex>
        <Hex size={200} spacing={true}>
          {/* <div className='flex flex-col items-center justify-center'>123</div> */}
        </Hex>
        <Hexagon
          size={200}
          color='#10B981'
          hoverColor='#059669'
          text='123'
          textColor='white'
          textSize='text-xl'
          spacing={true}
        />
        <Hexagon
          size={200}
          color='#10B981'
          hoverColor='#059669'
          text='233'
          textColor='white'
          textSize='text-xl'
          spacing={true}
        />
      </div>
      {/* Tab */}
      <div className={cn('my-5')}>
        <TabGroup tabs={tabs} />
      </div>

      {/* Move */}
      <Move />
      {/* BallMove */}
      <div className={cn('my-10 h-[190px] w-[250px]')}>
        <BallMove>
          <div className={cn('text-xl text-white')}>123</div>
        </BallMove>
      </div>
      {/* Glassmorphism */}
      <div className={cn('my-5 h-[500px] w-[1000px]')}>
        <Glassmorphism>
          <div className={cn('text-xl text-white')}>2322323</div>
        </Glassmorphism>
      </div>
      {/* Carousel */}
      <div className='my-5 h-[500px] w-[600px]'>
        <Carousel slides={undefined} autoPlayInterval={5000} />
      </div>
      {/* CarouselWithPreview */}
      <div className='my-5 h-[500px] w-full'>
        <CarouselWithPreview slides={undefined} autoPlayInterval={5000} />
      </div>

      {/* Card */}
      <div className={cn('my-5')}>
        <Card images={undefined}></Card>
      </div>
    </div>
  );
}
