"use client";

import { useState, useEffect, useRef } from 'react';

export const useUpdateSimulation = (
  durationInSeconds: number,
  isSimulating: boolean,
  onComplete?: () => void
) => {
  const [progress, setProgress] = useState(0);
  const animationFrameId = useRef<number>();
  const startTimeRef = useRef<number>();
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (isSimulating) {
      startTimeRef.current = performance.now();
      setProgress(0);

      const animate = (currentTime: number) => {
        if (!startTimeRef.current) return;
        
        const elapsedTime = currentTime - startTimeRef.current;
        const totalDuration = durationInSeconds * 1000;
        const newProgress = Math.min((elapsedTime / totalDuration) * 100, 100);
        
        setProgress(newProgress);

        if (newProgress >= 100) {
          onCompleteRef.current?.();
        } else {
          animationFrameId.current = requestAnimationFrame(animate);
        }
      };

      animationFrameId.current = requestAnimationFrame(animate);
    } else {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      setProgress(0);
      startTimeRef.current = undefined;
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isSimulating, durationInSeconds]);

  return progress;
};
