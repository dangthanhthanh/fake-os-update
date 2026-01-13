"use client";

import type { FC } from 'react';
import { Watermark } from './common';

// Custom dot spinner for Windows 8 style
const DotSpinner = () => (
  <div className="relative w-24 h-5 mx-auto mb-8">
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className="absolute top-0 w-2.5 h-2.5 bg-white rounded-full animate-win8-spinner"
        style={{ animationDelay: `${i * 0.13}s` }}
      />
    ))}
    <style jsx>{`
      @keyframes win8-spinner {
        0% { transform: translateX(-200%); opacity: 0; }
        30%, 70% { transform: translateX(0); opacity: 1; }
        100% { transform: translateX(200%); opacity: 0; }
      }
      .animate-win8-spinner {
        animation: win8-spinner 1.3s linear infinite;
        left: 50%;
      }
    `}</style>
  </div>
);

interface Props {
  progress: number;
  customMessage: string;
  showPercentage: boolean;
}

export const Windows8Update: FC<Props> = ({ progress, customMessage, showPercentage }) => {
  return (
    <div className="w-full h-full bg-[#003366] text-white flex items-center justify-center font-['Segoe_UI_Light',_'Segoe_UI',_sans-serif]">
      <div className="text-center">
        <DotSpinner />
        <h1 className="text-4xl font-light mb-4">
          {customMessage || "Keep your PC on until this is done."}
        </h1>
        <h2 className="text-2xl font-light">
          {showPercentage ? `Installing updates ${Math.floor(progress)}%` : 'Installing updates'}
        </h2>
      </div>
      <Watermark />
    </div>
  );
};
