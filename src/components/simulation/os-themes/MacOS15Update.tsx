"use client";

import type { FC } from 'react';
import { Watermark, AppleLogo } from './common';

interface Props {
  progress: number;
  customMessage: string;
}

export const MacOS15Update: FC<Props> = ({ progress, customMessage }) => {
  return (
    <div className="w-full h-full bg-black text-white flex flex-col items-center justify-center font-sans">
      <div className="w-72 text-center">
        <AppleLogo />
        <p className="text-xl mb-6">{customMessage || 'Installing macOS 15'}</p>
        <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
          <div
            className="bg-neutral-300 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <Watermark />
    </div>
  );
};
