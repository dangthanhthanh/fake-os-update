import type { OS_CONFIG } from '@/lib/os-data';

export type OperatingSystem = keyof typeof OS_CONFIG;

export type OSVersion<T extends OperatingSystem> = (typeof OS_CONFIG)[T]['versions'][number];

export type SimulationConfig = {
  os: OperatingSystem;
  version: OSVersion<OperatingSystem>;
  duration: number; // in seconds
  customMessage: string;
  showPercentage: boolean;
};
