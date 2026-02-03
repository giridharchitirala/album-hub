import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { Album } from "@/data/albums";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AlbumCardProps {
  album: Album;
  index?: number;
}

export const AlbumCard = ({ album, index = 0 }: AlbumCardProps) => {
  return (
    <Link
      to={`/albums/${album.id}`}
      className={cn(
        "group block animate-fade-in",
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden rounded-2xl hover-lift">
        {/* Album Cover */}
        <div className="aspect-square overflow-hidden">
          <img
            src={album.coverImage}
            alt={album.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
            <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
          </div>
        </div>

        {/* Genre Badge */}
        <Badge 
          className="absolute top-3 right-3 bg-background/90 text-foreground border-0"
        >
          {album.genre}
        </Badge>
      </div>

      {/* Album Info */}
      <div className="mt-4 space-y-1">
        <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
          {album.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {album.year} • {album.tracks.length} tracks
        </p>
      </div>
    </Link>
  );
};
