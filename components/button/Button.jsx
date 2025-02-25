'use client';

export default function Button({ icon, text, onClick, bgColor, width, type }) {
  return (
    <button
      type={type}
      className={`flex h-fit ${width} items-center justify-center gap-2 rounded-md ${bgColor} p-3 text-lg font-bold hover:bg-grey-100 hover:text-grey-800`}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
}
