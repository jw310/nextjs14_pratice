'use client';

import { useState } from 'react';

import { cn } from '@/lib/clsx';

const TabGroup = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  // const Tab1Content = () => <div>Tab 1 Content</div>;
  // const Tab2Content = () => <div>Tab 2 Content</div>;

  // const tabs = [
  //   { label: 'Tab 1', content: <Tab1Content /> },
  //   { label: 'Tab 2', content: <Tab2Content /> },
  // ];

  return (
    <div className='w-full'>
      <div className='flex border-b border-gray-200'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={cn(
              `py-2, px-4`,
              activeTab === index
                ? 'border-b-2 border-blue-500 text-xl text-blue-600'
                : 'border-b-2 text-xl text-gray-600 hover:text-blue-500'
            )}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={cn('p-4')}> {tabs[activeTab].content}</div>
    </div>
  );
};

export default TabGroup;
