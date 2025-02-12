import dynamic from 'next/dynamic';
import Image from 'next/image';

const ProgressCircle = dynamic(
  () => import('@/components/progress/ProgressCircle')
);
const ProgressBar = dynamic(() => import('@/components/progress/ProgressBar'));
const LineChart = dynamic(() => import('@/components/chart/LineChart'));

export default function ChartPage() {
  const progress = '80';

  const chartLabels = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
  ];
  const chartData = [
    200, 210, 200, 350, 370, 400, 470, 350, 300, 350, 200, 400, 400,
  ];

  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <div>
          <ProgressCircle value={progress} strokeColor='#53B77A' />
        </div>
        <div className='w-1/2 pt-[100px]'>
          <LineChart labels={chartLabels} weights={chartData} />
        </div>
        <div className='w-1/2'>
          <ProgressBar value={progress} barColor='rgba(83, 183, 122, 1)' />
        </div>
      </div>
    </>
  );
}
