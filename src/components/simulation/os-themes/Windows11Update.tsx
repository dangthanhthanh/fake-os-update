"use client";

import type { FC } from 'react';
import { Spinner, Watermark } from './common';

interface Props {
  progress: number;
  customMessage: string;
  showPercentage: boolean;
}

export const Windows11Update: FC<Props> = ({ progress, customMessage, showPercentage }) => {
  return (
    <div className="w-full h-full bg-[#0067c6] text-white flex flex-col items-center justify-center font-['Segoe_UI',_sans-serif]">
      <div className="text-center">
        <Spinner className="w-12 h-12 mx-auto mb-10" />
        <p className="text-2xl mb-4">
          {customMessage || "Updates are underway. Please keep your computer on."}
        </p>
        {showPercentage && (
          <p className="text-2xl mb-12">{Math.floor(progress)}%</p>
        )}
        <p className="text-lg font-light">Your device may restart.</p>
      </div>
      <Watermark />
    </div>
  );
};
