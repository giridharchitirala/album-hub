import { Play, Pause } from "lucide-react";
import { Track } from "@/data/albums";
import { useAudio } from "@/contexts/AudioContext";
import { cn } from "@/lib/utils";

interface TrackPlayerProps {
  track: Track;
  trackNumber: number;
}

export const TrackPlayer = ({ track, trackNumber }: TrackPlayerProps) => {
  const { currentTrackId, isPlaying, progress, duration, playTrack } = useAudio();
  
  const isCurrentTrack = currentTrackId === track.id;
  const isTrackPlaying = isCurrentTrack && isPlaying;
  const progressPercentage = isCurrentTrack ? (progress / duration) * 100 : 0;

  const handlePlay = () => {
    playTrack(track.id, track.previewUrl);
  };

  return (
    <div
      className={cn(
        "group flex items-center gap-4 p-4 rounded-xl transition-all duration-200",
        isCurrentTrack ? "bg-primary/10" : "hover:bg-muted"
      )}
    >
      {/* Track Number / Play Button */}
      <button
        onClick={handlePlay}
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200",
          isTrackPlaying
            ? "bg-primary text-primary-foreground"
            : "bg-muted group-hover:bg-primary group-hover:text-primary-foreground"
        )}
      >
        {isTrackPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <span className="group-hover:hidden text-sm font-medium text-muted-foreground">
            {trackNumber}
          </span>
        )}
        {!isTrackPlaying && (
          <Play className="w-4 h-4 hidden group-hover:block ml-0.5" />
        )}
      </button>

      {/* Track Info */}
      <div className="flex-1 min-w-0">
        <h4 className={cn(
          "font-medium truncate transition-colors",
          isCurrentTrack ? "text-primary" : "text-foreground"
        )}>
          {track.title}
        </h4>
        
        {/* Progress Bar (visible when playing) */}
        {isCurrentTrack && (
          <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-100"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        )}
      </div>

      {/* Duration */}
      <span className="text-sm text-muted-foreground">
        {track.duration}
      </span>

      {/* Equalizer Animation */}
      {isTrackPlaying && (
        <div className="flex items-center gap-0.5 h-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-1 bg-primary rounded-full animate-bars"
              style={{
                height: "100%",
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
