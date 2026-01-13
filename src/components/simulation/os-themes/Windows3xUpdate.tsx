"use client";

import type { FC } from 'react';
import { Watermark } from './common';

interface Props {
  progress: number;
  customMessage: string;
  showPercentage: boolean;
}

export const Windows3xUpdate: FC<Props> = ({ progress, customMessage, showPercentage }) => {
  return (
    <div className="w-full h-full bg-[#008080] text-black flex items-center justify-center font-['System',_sans-serif]">
        <div className="w-[450px] bg-[#C0C0C0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-black shadow-lg p-1">
            <div className="bg-[#000080] text-white p-1 text-lg">
                Windows 3.1 Setup
            </div>
            <div className="p-4">
                <p className="mb-4">{customMessage || 'Setup is now updating your system.'}</p>
                {showPercentage && (
                     <div className="flex items-center gap-4">
                        <p>Progress:</p>
                        <div className="w-full h-8 bg-white border-2 border-black">
                            <div className="h-full bg-[#000080]" style={{ width: `${progress}%` }}></div>
                        </div>
                     </div>
                )}
            </div>
        </div>
      <Watermark />
    </div>
  );
};
