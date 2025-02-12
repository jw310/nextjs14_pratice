'use client';

import React, { useState, useEffect, useRef } from 'react';

import {
  // 先 import 要使用的圖形、功能
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip, // 滑鼠在數據區域上的提示顯示
  PointElement,
  LineElement,
  BarElement,
  ArcElement, // pie, doughnut
  Title,
  Legend,
  Filler, // background fill
  Colors,
  render,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Title,
  Legend,
  Filler,
  Colors
);

export default function LineChart({ labels, weights }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      // console.log('ChartJS', chart); // Chart.js instance
      // console.log('CanvasRenderingContext2D', chart.ctx); // canvas context
      // console.log('HTMLCanvasElement', chart.canvas);
    }
  }, []);

  const chartData = {
    labels: labels,
    datasets: [
      {
        // backgroundColor: 'rgba(221, 169, 35, 1)',
        backgroundColor: ({ chart: { ctx } }) => {
          // More config for your gradient
          const bg = ctx.createLinearGradient(0, 0, 0, 350);
          bg.addColorStop(0, 'rgba(221, 169, 35, 1)');
          // bg.addColorStop(0.5, 'rgba(221, 169, 35, 0.5)');
          bg.addColorStop(1, 'rgba(221, 169, 35, 0)');
          // ctx.fillStyle = bg;
          // let x0 = 100;
          // let y0 = 100;
          // let w = 500;
          // let h = 300;
          // ctx.fillRect(x0, y0, w, h);

          return bg;
        },
        fill: true, // backgroundColor fill
        label: 'My First Dataset',
        data: weights,
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        borderColor: '#DDA923',
        lineTension: 0.5,
        pointBackgroundColor: '#DDA923',
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    indexAxis: 'x', // ˊ主軸線
    responsive: true,
    maintainAspectRatio: false, // 圖表是否維持固定比例，關了才能自定義寬高
    layout: {
      padding: 20,
    },
    plugins: {
      colors: {
        // 內建顏色套件
        enabled: false,
      },
      legend: {
        // 資料標籤
        display: false,
        position: 'top',
        align: 'center',
        boxWidth: 80,
        labels: {
          font: {
            size: 16,
            family: 'sans-serif',
            style: 'italic',
          },
        },
      },
      title: {
        display: true,
        position: 'top',
        align: 'start',
        text: 'MB/s',
        font: {
          size: 14,
          family: 'sans-serif',
        },
        color: '#CED2DA',
        padding: {
          bottom: 20,
        },
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          align: 'end',
          text: 'Time',
          font: {
            size: 14,
            family: 'sans-serif',
          },
          color: '#CED2DA',
        },
        ticks: {
          font: {
            size: 16,
            family: 'sans-serif',
            style: 'italic',
          },
          color: '#CED2DA',
        },
      },
      y: {
        display: true,
        beginAtZero: true,
        ticks: {
          font: {
            size: 16,
            family: 'sans-serif',
            style: 'italic',
          },
          color: '#CED2DA',
          textStrokeColor: '#205EA4',
          backdropColor: '#1B2839',
          padding: 15,
        },
        border: {
          dash: [6, 4],
        },
        grid: {
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          color: '#949EAE',
          lineWidth: 0.5,
        },
      },
    },
    animation: true,
  };

  return (
    <div className='h-[350px] w-full'>
      <Line ref={chartRef} data={chartData} options={chartOptions} />
    </div>
  );
}
