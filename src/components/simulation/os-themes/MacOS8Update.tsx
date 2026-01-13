"use client";

import type { FC } from 'react';
import { Watermark } from './common';

interface Props {
  progress: number;
  customMessage: string;
}

export const MacOS8Update: FC<Props> = ({ progress, customMessage }) => {
  return (
    <div className="w-full h-full bg-white text-black flex items-center justify-center font-['Geneva',_sans-serif]">
        <div className="w-[480px] bg-[#CCCCCC] border-2 border-black shadow-xl p-1">
             <div className="border-b-2 border-black p-1">
                <p className="text-base">Mac OS 8 Update</p>
            </div>
            <div className="p-4">
                <p className="mb-4">{customMessage || 'Updating your system software...'}</p>
                <div className="w-full bg-gray-400 h-5 border-black border-2">
                    <div className="bg-black h-full" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
      <Watermark />
    </div>
  );
};
