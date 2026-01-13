"use client";

import type { FC } from 'react';
import type { SimulationConfig } from '@/types/os-simulator';
import { useUpdateSimulation } from '@/hooks/useUpdateSimulation';
import { Windows11Update } from './simulation/os-themes/Windows11Update';
import { Windows10Update } from './simulation/os-themes/Windows10Update';
import { Windows8Update } from './simulation/os-themes/Windows8Update';
import { Windows7Update } from './simulation/os-themes/Windows7Update';
import { MacOSSonomaUpdate } from './simulation/os-themes/MacOSSonomaUpdate';
import { MacOSVenturaUpdate } from './simulation/os-themes/MacOSVenturaUpdate';
import { MacOSMontereyUpdate } from './simulation/os-themes/MacOSMontereyUpdate';
import { WindowsXPUpdate } from './simulation/os-themes/WindowsXPUpdate';
import { WindowsVistaUpdate } from './simulation/os-themes/WindowsVistaUpdate';
import { Windows2000Update } from './simulation/os-themes/Windows2000Update';
import { Windows9xUpdate } from './simulation/os-themes/Windows9xUpdate';
import { WindowsNTUpdate } from './simulation/os-themes/WindowsNTUpdate';
import { Windows3xUpdate } from './simulation/os-themes/Windows3xUpdate';
import { MacOSBigSurUpdate } from './simulation/os-themes/MacOSBigSurUpdate';
import { MacOSCatalinaUpdate } from './simulation/os-themes/MacOSCatalinaUpdate';
import { MacOSMojaveUpdate } from './simulation/os-themes/MacOSMojaveUpdate';
import { MacOSHighSierraUpdate } from './simulation/os-themes/MacOSHighSierraUpdate';
import { MacOSSierraUpdate } from './simulation/os-themes/MacOSSierraUpdate';
import { OSXLegacyUpdate } from './simulation/os-themes/OSXLegacyUpdate';
import { MacOS9Update } from './simulation/os-themes/MacOS9Update';
import { MacOS8Update } from './simulation/os-themes/MacOS8Update';
import { System7Update } from './simulation/os-themes/System7Update';
import { Windows81Update } from './simulation/os-themes/Windows81Update';
import { Windows1xUpdate } from './simulation/os-themes/Windows1xUpdate';
import { Windows2xUpdate } from './simulation/os-themes/Windows2xUpdate';
import { System1to4Update } from './simulation/os-themes/System1to4Update';
import { System5to6Update } from './simulation/os-themes/System5to6Update';
import { MacOS15Update } from './simulation/os-themes/MacOS15Update';


interface Props {
  config: SimulationConfig;
  onComplete: () => void;
}

export const UpdateScreen: FC<Props> = ({ config, onComplete }) => {
  const { os, version } = config;
  const progress = useUpdateSimulation(config.duration, true, onComplete);

  const renderUpdateScreen = () => {
    const commonProps = {
      progress,
      customMessage: config.customMessage,
    };
    
    if (os === 'Windows') {
      const windowsProps = { ...commonProps, showPercentage: config.showPercentage };
      switch (version) {
        case '11': return <Windows11Update {...windowsProps} />;
        case '10': return <Windows10Update {...windowsProps} />;
        case '8.1': return <Windows81Update {...windowsProps} />;
        case '8': return <Windows8Update {...windowsProps} />;
        case '7': return <Windows7Update {...windowsProps} />;
        case 'Vista': return <WindowsVistaUpdate {...windowsProps} />;
        case 'XP': return <WindowsXPUpdate {...windowsProps} />;
        case '2000': return <Windows2000Update {...windowsProps} />;
        case 'ME':
        case '98':
        case '95': return <Windows9xUpdate {...windowsProps} version={version} />;
        case 'NT 4.0':
        case 'NT 3.5':
        case 'NT 3.1': return <WindowsNTUpdate {...windowsProps} version={version} />;
        case '3.1': return <Windows3xUpdate {...windowsProps} />;
        case '2.0': return <Windows2xUpdate {...windowsProps} />;
        case '1.0': return <Windows1xUpdate {...windowsProps} />;
      }
    }
    
    if (os === 'macOS') {
      switch (version) {
        case '15': return <MacOS15Update {...commonProps} />;
        case 'Sonoma': return <MacOSSonomaUpdate {...commonProps} />;
        case 'Ventura': return <MacOSVenturaUpdate {...commonProps} />;
        case 'Monterey': return <MacOSMontereyUpdate {...commonProps} />;
        case 'Big Sur': return <MacOSBigSurUpdate {...commonProps} />;
        case 'Catalina': return <MacOSCatalinaUpdate {...commonProps} />;
        case 'Mojave': return <MacOSMojaveUpdate {...commonProps} />;
        case 'High Sierra': return <MacOSHighSierraUpdate {...commonProps} />;
        case 'Sierra': return <MacOSSierraUpdate {...commonProps} />;
        case 'El Capitan':
        case 'Yosemite':
        case 'Mavericks':
        case 'Mountain Lion':
        case 'Lion':
        case 'Snow Leopard':
        case 'Leopard':
        case 'Tiger':
        case 'Panther':
        case 'Jaguar':
        case 'Puma':
        case 'Cheetah': return <OSXLegacyUpdate {...commonProps} version={version} />;
        case 'Mac OS 9': return <MacOS9Update {...commonProps} />;
        case 'Mac OS 8': return <MacOS8Update {...commonProps} />;
        case 'System 7': return <System7Update {...commonProps} />;
        case 'System 6':
        case 'System 5': return <System5to6Update {...commonProps} version={version} />;
        case 'System 4':
        case 'System 3':
        case 'System 2':
        case 'System 1': return <System1to4Update {...commonProps} version={version} />;
      }
    }
    
    return <div className="text-white">Unsupported OS/Version combination.</div>;
  };

  return (
    <div className="w-full h-full select-none">
      {renderUpdateScreen()}
    </div>
  );
};
