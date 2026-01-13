"use client";

import type { FC } from 'react';
import { Watermark } from './common';

interface Props {
  progress: number;
  customMessage: string;
}

export const System7Update: FC<Props> = ({ progress, customMessage }) => {
  return (
    <div className="w-full h-full bg-white text-black flex items-center justify-center font-['Geneva',_sans-serif]">
        <div className="w-[450px] border-2 border-black">
            <div className="p-4">
                <p className="mb-4 text-center">Welcome to Macintosh.</p>
                <p className="mb-4">{customMessage || 'Updating system software...'}</p>
                <div className="w-full bg-white h-4 border-black border">
                    <div className="bg-black h-full" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
      <Watermark />
    </div>
  );
};
