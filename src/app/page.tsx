"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import type { SimulationConfig } from "@/types/os-simulator";
import { ConfigurationForm } from "@/components/ConfigurationForm";
import { UpdateScreen } from "@/components/UpdateScreen";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [config, setConfig] = useState<SimulationConfig | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleExitFullscreen = useCallback(() => {
    setConfig(null);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        handleExitFullscreen();
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [handleExitFullscreen]);

  const startSimulation = async (data: SimulationConfig) => {
    if (containerRef.current) {
      try {
        await containerRef.current.requestFullscreen();
        setConfig(data);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Fullscreen Error",
          description: "Could not enter fullscreen mode. Please enable it in your browser settings.",
        })
        console.error("Fullscreen request failed:", error);
      }
    }
  };
  
  const endSimulation = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      // Fallback if not in fullscreen for some reason
      handleExitFullscreen();
    }
  }, [handleExitFullscreen]);

  return (
    <main ref={containerRef} className="w-full h-svh bg-background text-foreground flex items-center justify-center p-4">
      {config ? (
        <UpdateScreen config={config} onComplete={endSimulation} />
      ) : (
        <ConfigurationForm onStart={startSimulation} />
      )}
    </main>
  );
}
