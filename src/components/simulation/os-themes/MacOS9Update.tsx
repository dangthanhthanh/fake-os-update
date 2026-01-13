"use client";

import type { FC } from 'react';
import { Watermark } from './common';

interface Props {
  progress: number;
  customMessage: string;
}

export const MacOS9Update: FC<Props> = ({ progress, customMessage }) => {
  return (
    <div className="w-full h-full bg-[#E5E5E5] text-black flex items-center justify-center font-['Chicago',_sans-serif]">
        <div className="w-[500px] bg-[#C0C0C0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-black shadow-lg p-1">
            <div className="bg-gradient-to-r from-blue-500 to-blue-300 text-white p-1 text-base flex justify-between items-center">
                <span>Mac OS 9 Setup</span>
                <div className="flex gap-1">
                    <span className="w-4 h-4 bg-gray-300 border-black border"></span>
                    <span className="w-4 h-4 bg-gray-300 border-black border"></span>
                </div>
            </div>
            <div className="p-4">
                <p className="mb-4">{customMessage || 'Updating Mac OS...'}</p>
                <div className="w-full bg-gray-400 h-6 border-black border-t border-l">
                    <div className="bg-blue-500 h-full" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="mt-2 text-sm">Estimated time remaining: {Math.round(15 - (progress/100 * 15))} minutes</p>
            </div>
        </div>
      <Watermark />
    </div>
  );
};
