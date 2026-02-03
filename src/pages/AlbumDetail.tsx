import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Music, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { TrackPlayer } from "@/components/TrackPlayer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { albums } from "@/data/albums";

const AlbumDetail = () => {
  const { id } = useParams<{ id: string }>();
  const album = albums.find((a) => a.id === id);

  if (!album) {
    return (
      <Layout>
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Album Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The album you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/albums">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Albums
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  // Calculate total duration
  const totalMinutes = album.tracks.reduce((acc, track) => {
    const [mins, secs] = track.duration.split(":").map(Number);
    return acc + mins + secs / 60;
  }, 0);

  return (
    <Layout>
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/albums">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Albums
            </Link>
          </Button>

          {/* Album Header */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Album Cover */}
            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-4 gradient-hero rounded-3xl blur-2xl opacity-30" />
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="relative w-full max-w-md mx-auto aspect-square object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Album Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Badge variant="secondary" className="text-sm">
                {album.genre}
              </Badge>

              <h1 className="text-4xl md:text-5xl font-display font-bold">
                {album.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {album.year}
                </div>
                <div className="flex items-center gap-2">
                  <Music className="w-4 h-4" />
                  {album.tracks.length} tracks
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {Math.round(totalMinutes)} min
                </div>
              </div>

              <p className="text-lg text-muted-foreground">
                {album.description}
              </p>

              {album.credits && (
                <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-4">
                  {album.credits}
                </p>
              )}
            </div>
          </div>

          {/* Track List */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-display font-bold mb-6">Tracklist</h2>
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              {album.tracks.map((track, index) => (
                <TrackPlayer
                  key={track.id}
                  track={track}
                  trackNumber={index + 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AlbumDetail;
