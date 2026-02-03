import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { AlbumCard } from "@/components/AlbumCard";
import { Button } from "@/components/ui/button";
import { albums } from "@/data/albums";

const Index = () => {
  // Show first 4 albums as featured
  const featuredAlbums = albums.slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Featured Albums Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Featured <span className="text-gradient">Albums</span>
              </h2>
              <p className="text-muted-foreground mt-2">
                Explore the latest releases and fan favorites
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/albums">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAlbums.map((album, index) => (
              <AlbumCard key={album.id} album={album} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Albums Released", value: albums.length },
              { label: "Total Tracks", value: albums.reduce((acc, a) => acc + a.tracks.length, 0) },
              { label: "Years Active", value: new Date().getFullYear() - Math.min(...albums.map(a => a.year)) + 1 },
              { label: "Genres", value: new Set(albums.map(a => a.genre)).size },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient">
                  {stat.value}+
                </div>
                <div className="text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Ready to <span className="text-gradient">Explore</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Dive into the complete discography and discover the stories behind every track.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/albums">
              Browse All Albums
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
