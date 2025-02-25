'use client';

import { useState } from 'react';

export default function ALink({ text }) {
  return (
    <a target='_blank'>
      <div className='group relative cursor-pointer overflow-hidden rounded-lg bg-gray-200 px-6 py-3 [transform:translateZ(0)] before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:bg-sky-600 before:transition before:duration-500 before:ease-in-out hover:before:translate-x-0'>
        <span className='relative z-0 text-black transition duration-500 ease-in-out group-hover:text-gray-200'>
          {text}
        </span>
      </div>
    </a>
  );
}
