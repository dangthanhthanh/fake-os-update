"use client";

import type { FC } from 'react';
import { Watermark } from './common';

interface Props {
  progress: number;
  customMessage: string;
  showPercentage: boolean;
}

export const WindowsXPUpdate: FC<Props> = ({ progress, customMessage, showPercentage }) => {
  return (
    <div className="w-full h-full bg-[#003399] text-white flex flex-col items-center justify-center font-['Tahoma',_sans-serif]">
        <div className="w-[500px] h-[350px] bg-[#245edc] border-2 border-t-[#5b95ff] border-l-[#5b95ff] border-r-[#0c2c7b] border-b-[#0c2c7b] p-2 relative shadow-2xl">
            <div className="bg-gradient-to-r from-[#0837b0] to-[#5b95ff] p-2 flex justify-between items-center">
                <h1 className="text-xl font-bold">Windows XP Setup</h1>
            </div>
            <div className="p-8 text-lg">
                <p className="mb-8">{customMessage || 'Please wait while Windows installs updates...'}</p>
                
                {showPercentage && (
                    <div className="w-full bg-blue-900 rounded-sm h-6 border-2 border-[#0837b0] overflow-hidden flex items-center p-1">
                        <div
                        className="bg-green-500 h-full"
                        style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                )}
                 <p className="text-center mt-2">{Math.floor(progress)}% complete</p>

                <p className="absolute bottom-4 right-4">Your computer may restart during this process.</p>
            </div>
        </div>
      <Watermark />
    </div>
  );
};
