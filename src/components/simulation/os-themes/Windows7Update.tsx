"use client";

import type { FC } from 'react';
import { Watermark } from './common';

interface Props {
  progress: number;
  customMessage: string;
  showPercentage: boolean;
}

export const Windows7Update: FC<Props> = ({ progress, customMessage, showPercentage }) => {
  return (
    <div className="w-full h-full bg-[#244f77] text-white flex items-center justify-center font-['Segoe_UI',_Tahoma,_sans-serif]">
      <div className="text-center">
        <h1 className="text-3xl mb-4">
          {customMessage || "Please do not power off or unplug your machine."}
        </h1>
        <h2 className="text-2xl mb-8">
          Installing update {showPercentage ? Math.floor(progress / 10) + 1 : ''} of {showPercentage ? '10' : ''}...
        </h2>

        {showPercentage && (
           <div className="w-96 mx-auto bg-blue-900 rounded-sm h-5 border border-blue-400 overflow-hidden">
             <div
               className="bg-gradient-to-b from-green-300 to-green-500 h-full"
               style={{ width: `${progress}%` }}
             ></div>
           </div>
        )}
      </div>
      <Watermark />
    </div>
  );
};
