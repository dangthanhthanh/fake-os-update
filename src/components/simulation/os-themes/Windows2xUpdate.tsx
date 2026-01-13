"use client";

import type { FC } from 'react';
import { Watermark } from './common';

interface Props {
  progress: number;
  customMessage: string;
  showPercentage: boolean;
}

export const Windows2xUpdate: FC<Props> = ({ progress, customMessage, showPercentage }) => {
  return (
    <div className="w-full h-full bg-[#0000AA] text-white flex items-center justify-center font-['System',_sans-serif] text-lg">
        <div className="w-[400px] bg-[#C0C0C0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-black shadow-lg p-1">
            <div className="bg-[#000080] text-white p-1">
                <p>Windows 2.0 Setup</p>
            </div>
            <div className="p-4 text-black">
                <p className="mb-4">{customMessage || 'Setup is updating your system.'}</p>
                {showPercentage && (
                    <div className="w-full h-6 bg-white border-black border-2">
                        <div className="h-full bg-blue-500" style={{ width: `${progress}%` }}></div>
                    </div>
                )}
            </div>
        </div>
      <Watermark />
    </div>
  );
};
