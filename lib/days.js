import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

// 顯示成 天 小時 分 秒
export const timeDuration = (compareTime) => {
  const diffTime = dayjs.duration(dayjs() - dayjs.unix(compareTime));
  const day = diffTime.days(); //天
  const hours = diffTime.hours(); //小時
  const minutes = diffTime.minutes(); //分
  // const seconds = diffTime.seconds(); //秒
  // return `${day}天${hours}小時${minutes}分`;
  return {
    day: `${day}`,
    hours: `${hours}`,
    minutes: `${minutes}`,
  };
  // const totoalSeconds = day * 86400 + hours * 60 * 60 + minutes * 60 + seconds;
  // return totoalSeconds;
};

// 直接用 diff 處理時間差
export const timeDiff = (start, end) => {
  const date1 = dayjs.unix(start);
  const date2 = dayjs.unix(end);
  return date2.diff(date1, 'h');
};

// console.log(timeDuration(endTime)); // 會多出 - 符號

// // 處理方式
// export const timeDuration = (compareTime) => {
//   const date1 = dayjs.unix(compareTime);
//   const date2 = dayjs();
//   return Number(date1.diff(date2, 'h').toString().replace(/\-/g, '')); // 先轉成字串用正則處理，再轉成數字
// };
