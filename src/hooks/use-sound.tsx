// hooks/use-sound.tsx
"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { soundManager } from '@/lib/sound';

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playClick: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Load only click sound
    soundManager.loadSound('click', '/click.mp3');

    // Load mute preference from localStorage
    const savedMute = localStorage.getItem('sound-muted') === 'true';
    setIsMuted(savedMute);
    soundManager.setMuted(savedMute);

    // Add global click listener for any click on the screen
    const handleGlobalClick = () => {
      if (!savedMute) {
        soundManager.playSound('click', 0.25);
      }
    };

    document.addEventListener('click', handleGlobalClick);

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    soundManager.setMuted(newMuted);
    localStorage.setItem('sound-muted', newMuted.toString());
  };

  const playClick = () => soundManager.playSound('click', 1.5); // Kept for specific triggers if needed 

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playClick }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
}
