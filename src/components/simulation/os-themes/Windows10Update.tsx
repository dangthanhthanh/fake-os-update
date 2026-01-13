"use client";

import type { FC } from 'react';
import { Spinner, Watermark } from './common';

interface Props {
  progress: number;
  customMessage: string;
  showPercentage: boolean;
}

export const Windows10Update: FC<Props> = ({ progress, customMessage, showPercentage }) => {
  return (
    <div className="w-full h-full bg-[#0078d4] text-white flex items-center justify-center font-['Segoe_UI',_sans-serif]">
      <div className="text-center">
        <Spinner className="w-10 h-10 mx-auto mb-8" />
        <h1 className="text-3xl mb-4">
          {customMessage || "Working on updates"}
        </h1>
        {showPercentage && (
          <h2 className="text-3xl mb-4">{Math.floor(progress)}% complete</h2>
        )}
        <p className="text-xl">Don't turn off your PC. This will take a while.</p>
        <p className="text-lg mt-10">Your PC will restart several times.</p>
      </div>
      <Watermark />
    </div>
  );
};
