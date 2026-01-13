"use client";

import type { FC } from 'react';
import { Watermark } from './common';
import type { OSVersion } from '@/types/os-simulator';


interface Props {
  progress: number;
  customMessage: string;
  version: OSVersion<'macOS'>;
}

export const System5to6Update: FC<Props> = ({ progress, customMessage, version }) => {
  return (
    <div className="w-full h-full bg-[#B6B6B6] text-black flex items-center justify-center font-['Geneva',_sans-serif]">
        <div className="w-[480px] bg-[#CCCCCC] border-2 border-black p-1 shadow-md">
            <div className="p-4 text-center">
                <p className="text-lg mb-4">Welcome to Macintosh</p>
                <p className="mb-4">{customMessage || `Updating to System ${version}...`}</p>
                <div className="w-full bg-gray-400 h-5 border-black border">
                    <div className="bg-black h-full" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
      <Watermark />
    </div>
  );
};
