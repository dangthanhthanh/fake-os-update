"use client";

import type { FC } from 'react';
import { Watermark } from './common';

interface Props {
  progress: number;
  customMessage: string;
  showPercentage: boolean;
}

export const Windows1xUpdate: FC<Props> = ({ progress, customMessage, showPercentage }) => {
  return (
    <div className="w-full h-full bg-black text-white flex items-center justify-center font-['Fixedsys',_monospace] text-xl">
      <div className="text-left w-3/4">
        <p className="animate-pulse">Microsoft Windows Version 1.0</p>
        <br />
        <p>{customMessage || "Please wait..."}</p>
        <br />
        {showPercentage && <p>{Math.floor(progress)}% complete</p>}
      </div>
      <Watermark />
    </div>
  );
};
