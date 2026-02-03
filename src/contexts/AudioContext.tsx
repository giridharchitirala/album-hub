import React, { createContext, useContext, useState, useRef, useCallback } from "react";

interface AudioContextType {
  currentTrackId: string | null;
  isPlaying: boolean;
  progress: number;
  duration: number;
  playTrack: (trackId: string, previewUrl?: string) => void;
  pauseTrack: () => void;
  togglePlay: () => void;
  seekTo: (percentage: number) => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationRef = useRef<number>();

  const updateProgress = useCallback(() => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      animationRef.current = requestAnimationFrame(updateProgress);
    }
  }, []);

  const playTrack = useCallback((trackId: string, previewUrl?: string) => {
    // If clicking the same track, toggle play/pause
    if (currentTrackId === trackId && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        animationRef.current = requestAnimationFrame(updateProgress);
      }
      return;
    }

    // Stop current audio if playing
    if (audioRef.current) {
      audioRef.current.pause();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    // For demo purposes, we'll simulate playback without actual audio files
    // In production, replace with actual audio file URLs
    setCurrentTrackId(trackId);
    setProgress(0);
    setDuration(180); // 3 minutes demo duration
    setIsPlaying(true);

    // Simulate progress for demo
    const simulateProgress = () => {
      setProgress((prev) => {
        if (prev >= 180) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 0.1;
      });
    };

    const interval = setInterval(simulateProgress, 100);

    // Store interval reference for cleanup
    audioRef.current = {
      pause: () => clearInterval(interval),
      play: () => {},
      currentTime: 0,
    } as unknown as HTMLAudioElement;
  }, [currentTrackId, isPlaying, updateProgress]);

  const pauseTrack = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pauseTrack();
    } else if (currentTrackId) {
      playTrack(currentTrackId);
    }
  }, [isPlaying, currentTrackId, pauseTrack, playTrack]);

  const seekTo = useCallback((percentage: number) => {
    const newTime = (percentage / 100) * duration;
    setProgress(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  }, [duration]);

  return (
    <AudioContext.Provider
      value={{
        currentTrackId,
        isPlaying,
        progress,
        duration,
        playTrack,
        pauseTrack,
        togglePlay,
        seekTo,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
