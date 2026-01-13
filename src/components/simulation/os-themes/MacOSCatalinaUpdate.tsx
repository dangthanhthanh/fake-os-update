"use client";

import type { FC } from 'react';
import { Watermark, AppleLogo } from './common';

interface Props {
  progress: number;
  customMessage: string;
}

export const MacOSCatalinaUpdate: FC<Props> = ({ progress, customMessage }) => {
  return (
    <div className="w-full h-full bg-black text-white flex flex-col items-center justify-center font-sans">
      <div className="w-72 text-center">
        <AppleLogo />
        <p className="text-xl mb-6">{customMessage || 'Installing macOS Catalina'}</p>
        <div className="w-full bg-neutral-800 rounded-full h-1 overflow-hidden">
          <div
            className="bg-neutral-300 h-1 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-neutral-500 mt-2">About {Math.round(45 - (progress/100 * 45))} minutes remaining</p>
      </div>
      <Watermark />
    </div>
  );
};
