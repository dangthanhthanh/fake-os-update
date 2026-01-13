"use client";

import type { FC } from 'react';
import { Watermark, AppleLogo } from './common';
import type { OSVersion } from '@/types/os-simulator';

const osNames = {
    'El Capitan': 'OS X El Capitan',
    'Yosemite': 'OS X Yosemite',
    'Mavericks': 'OS X Mavericks',
    'Mountain Lion': 'OS X Mountain Lion',
    'Lion': 'Mac OS X Lion',
    'Snow Leopard': 'Mac OS X Snow Leopard',
    'Leopard': 'Mac OS X Leopard',
    'Tiger': 'Mac OS X Tiger',
    'Panther': 'Mac OS X Panther',
    'Jaguar': 'Mac OS X Jaguar',
    'Puma': 'Mac OS X Puma',
    'Cheetah': 'Mac OS X Cheetah',
}

interface Props {
  progress: number;
  customMessage: string;
  version: OSVersion<'macOS'>;
}

export const OSXLegacyUpdate: FC<Props> = ({ progress, customMessage, version }) => {
    const osName = (version in osNames) ? osNames[version as keyof typeof osNames] : 'OS X';
  return (
    <div className="w-full h-full bg-[#999999] text-black flex flex-col items-center justify-center font-['Lucida_Grande',_sans-serif]">
      <div className="text-center bg-white/80 p-12 rounded-lg shadow-2xl">
        <AppleLogo />
        <p className="text-xl mt-4 mb-6">{customMessage || `Installing ${osName}`}</p>
        <div className="w-96 bg-gray-300 rounded-full h-4 overflow-hidden border border-gray-400">
          <div
            className="bg-blue-500 h-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <Watermark />
    </div>
  );
};
