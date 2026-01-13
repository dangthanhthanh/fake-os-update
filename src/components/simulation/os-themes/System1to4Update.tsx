"use client";

import type { FC } from 'react';
import { Watermark } from './common';
import type { OSVersion } from '@/types/os-simulator';

interface Props {
  progress: number;
  customMessage: string;
  version: OSVersion<'macOS'>;
}

export const System1to4Update: FC<Props> = ({ progress, customMessage, version }) => {
  return (
    <div className="w-full h-full bg-white text-black flex flex-col items-center justify-center font-['Chicago',_sans-serif]">
      <div className="text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4"><path d="M12 2l2.3 7.4h7.7l-6 4.8 2.3 7.4-6-4.8-6 4.8 2.3-7.4-6-4.8h7.7L12 2z"/></svg>
        <p className="text-lg">Welcome to Macintosh</p>
        <p className="mt-4">{customMessage || `Preparing your System ${version} disk...`}</p>
      </div>
      <div className="fixed bottom-10 w-3/4">
        <div className="w-full bg-gray-300 h-4 border border-black">
            <div className="bg-black h-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <Watermark />
    </div>
  );
};
