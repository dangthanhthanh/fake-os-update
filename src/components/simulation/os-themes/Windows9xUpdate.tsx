"use client";

import type { FC } from 'react';
import { Watermark } from './common';
import type { OSVersion } from '@/types/os-simulator';

const osNames = {
    '95': 'Windows 95',
    '98': 'Windows 98',
    'ME': 'Windows ME',
}

interface Props {
  progress: number;
  customMessage: string;
  showPercentage: boolean;
  version: OSVersion<'Windows'>
}

export const Windows9xUpdate: FC<Props> = ({ progress, customMessage, showPercentage, version }) => {
  const osName = (version in osNames) ? osNames[version as keyof typeof osNames] : 'Windows';

  return (
    <div className="w-full h-full bg-[#008080] text-white flex items-center justify-center font-['MS_Sans_Serif',_sans-serif]">
      <div className="w-96 p-1 bg-gray-400 shadow-md border-t-white border-l-white border-r-black border-b-black">
        <div className="bg-[#000080] p-1 flex justify-between items-center">
            <h1 className="text-lg">{osName} Setup</h1>
        </div>
        <div className="bg-gray-300 text-black p-4">
            <p className="mb-4">{customMessage || 'Setup is updating your system files.'}</p>
            {showPercentage && (
                <>
                    <p className="text-sm mb-2">Progress...</p>
                    <div className="w-full bg-gray-400 h-6 border-black border-2">
                        <div className="bg-blue-600 h-full" style={{ width: `${progress}%` }}></div>
                    </div>
                    <p className="text-sm mt-1 text-center">{Math.floor(progress)}% Complete</p>
                </>
            )}
        </div>
      </div>
      <Watermark />
    </div>
  );
};
