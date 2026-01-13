"use client";

import type { FC } from 'react';
import { Watermark } from './common';

interface Props {
  progress: number;
  customMessage: string;
  showPercentage: boolean;
}

export const Windows2000Update: FC<Props> = ({ progress, customMessage, showPercentage }) => {
  return (
    <div className="w-full h-full bg-[#000080] text-white flex items-center justify-center font-['Tahoma',_sans-serif]">
      <div className="text-center w-2/3">
        <h1 className="text-3xl mb-10 font-bold">Microsoft Windows 2000</h1>
        <p className="text-xl mb-6">{customMessage || "Windows is installing updates."}</p>
        <p className="text-lg mb-6">Please wait. This may take several minutes.</p>

        {showPercentage && (
           <div className="w-full mx-auto bg-blue-900 rounded-none h-6 border-2 border-white overflow-hidden">
             <div
               className="bg-gradient-to-r from-blue-300 to-blue-500 h-full text-black text-center"
               style={{ width: `${progress}%` }}
             >
                {Math.floor(progress)}%
             </div>
           </div>
        )}
      </div>
      <Watermark />
    </div>
  );
};
