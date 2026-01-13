"use client";

import type { FC } from 'react';
import { Watermark } from './common';
import type { OSVersion } from '@/types/os-simulator';

const osNames = {
    'NT 3.1': 'Windows NT 3.1',
    'NT 3.5': 'Windows NT 3.5',
    'NT 4.0': 'Windows NT 4.0',
}

interface Props {
  progress: number;
  customMessage: string;
  showPercentage: boolean;
  version: OSVersion<'Windows'>
}

export const WindowsNTUpdate: FC<Props> = ({ progress, customMessage, showPercentage, version }) => {
  const osName = (version in osNames) ? osNames[version as keyof typeof osNames] : 'Windows NT';
  const totalFiles = 250;
  const filesCopied = Math.floor((progress / 100) * totalFiles);

  return (
    <div className="w-full h-full bg-[#0000AA] text-[#FFFF00] flex flex-col items-center justify-center font-['Fixedsys',_monospace] p-4 text-lg">
      <div className="w-full">
        <p>Windows NT Setup</p>
        <p>==================================================</p>
        <p>&nbsp;</p>
        <p>{customMessage || 'Setup is copying files...'}</p>
        <p>&nbsp;</p>
        {showPercentage && (
            <>
                <div className="w-full bg-gray-600">
                    <div className="bg-[#FFFF00] h-6" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="mt-2">Copying file {filesCopied} of {totalFiles}...</p>
            </>
        )}
        <p>&nbsp;</p>
        <p>Please wait. Your computer will restart automatically after the update.</p>
        <p>&nbsp;</p>
        <p>==================================================</p>
      </div>

      <Watermark />
    </div>
  );
};
