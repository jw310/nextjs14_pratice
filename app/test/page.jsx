'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useFormState } from 'react-dom';

import { cn } from '@/lib/clsx';

import chevronDownIcon from '@/assets/chevron-down.svg';

import { testPOST } from '@/actions/test';

import Hex from '@/components/hex/hex';
import Hexagon from '@/components/hex/hexagon';
import TabGroup from '@/components/tab/tabGroup';

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

      <div className={cn('')}>
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
          Click Me
        </button>
      </div>

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
      <div className={cn('mt-5')}>
        <TabGroup tabs={tabs} />
      </div>
      {/* backgroundBall */}
      <div className={cn('relative mt-5 h-[190px] w-[250px] bg-gray-100')}>
        <div
          className={cn(
            'relative z-10 h-full w-full bg-[#ffffff8c] mix-blend-overlay backdrop-blur-[8px]'
          )}
        ></div>
        <div
          className={cn(
            'animate-moveOne absolute h-20 w-20 rounded-[50%]  bg-green-600'
          )}
        ></div>
        <div
          className={cn(
            'animate-moveTwo absolute h-20 w-20 rounded-[50%] bg-yellow-600'
          )}
        ></div>
        {/* <div
          className={cn(
            'absolute h-[100px] w-[100px] bg-yellow-600 mix-blend-overlay'
          )}
          style={{ animation: 'move 15s linear infinite alternate' }}
        ></div> */}
      </div>

      {/* backgroundBall 2 */}
      <div className={cn('relative h-[500px] w-[500px]')}>
        <div className='gradient-bg flex items-center justify-center'>
          <div className={cn('absolute z-10 text-white')}>123</div>
          <svg xmlns='http://www.w3.org/2000/svg'>
            <defs>
              <filter id='goo'>
                <feGaussianBlur
                  in='SourceGraphic'
                  stdDeviation='10'
                  result='blur'
                />
                <feColorMatrix
                  in='blur'
                  mode='matrix'
                  values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
                  result='goo'
                />
                <feBlend in='SourceGraphic' in2='goo' />
              </filter>
            </defs>
          </svg>
          <div className='gradients-container'>
            <div className='g1'></div>
            <div className='g2'></div>
            <div className='g3'></div>
            <div className='g4'></div>
            <div className='g5'></div>
            <div className='interactive'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
