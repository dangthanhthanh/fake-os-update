"use client";

import type { FC } from 'react';
import { Watermark } from './common';

const VistaSpinner = () => (
    <div className="w-16 h-16 border-8 border-gray-400 border-t-green-400 rounded-full animate-spin"></div>
);

interface Props {
  progress: number;
  customMessage: string;
  showPercentage: boolean;
}

export const WindowsVistaUpdate: FC<Props> = ({ progress, customMessage, showPercentage }) => {
  return (
    <div className="w-full h-full bg-black text-white flex flex-col items-center justify-center font-['Segoe_UI',_sans-serif]">
      <div className="text-center">
        <VistaSpinner />
        <h1 className="text-2xl mt-8">
            {customMessage || "Installing updates..."} {showPercentage && `(${Math.floor(progress)}%)`}
        </h1>
        <p className="text-lg mt-4">Please do not turn off or unplug your computer.</p>
      </div>
      <Watermark />
    </div>
  );
};
