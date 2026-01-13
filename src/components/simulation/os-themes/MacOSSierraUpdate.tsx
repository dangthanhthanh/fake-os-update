"use client";

import type { FC } from 'react';
import { Watermark, AppleLogo } from './common';

interface Props {
  progress: number;
  customMessage: string;
}

export const MacOSSierraUpdate: FC<Props> = ({ progress, customMessage }) => {
  return (
    <div className="w-full h-full bg-black text-white flex flex-col items-center justify-center font-sans">
      <div className="w-72 text-center">
        <AppleLogo />
        <p className="text-lg mt-4 mb-4">{customMessage || 'Installing macOS Sierra'}</p>
        <div className="w-full bg-neutral-600 rounded-full h-1">
          <div
            className="bg-white h-1 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <Watermark />
    </div>
  );
};
