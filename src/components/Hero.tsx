import { Link } from "react-router-dom";
import { Play, Disc3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { albums } from "@/data/albums";

export const Hero = () => {
  const featuredAlbum = albums[0];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "-1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              <Disc3 className="w-4 h-4 animate-spin" style={{ animationDuration: "3s" }} />
              New Album Out Now
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Feel the <span className="text-gradient">Music</span>, 
              <br />
              Live the <span className="text-gradient">Moment</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Explore a world of sound through carefully crafted albums and immersive audio experiences. 
              Every track tells a story.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full px-8 hover-lift">
                <Link to="/albums">
                  <Play className="w-5 h-5 mr-2" />
                  Explore Albums
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 hover-lift">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Featured Album */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Link 
              to={`/albums/${featuredAlbum.id}`}
              className="group relative"
            >
              <div className="absolute -inset-4 gradient-hero rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative">
                <img
                  src={featuredAlbum.coverImage}
                  alt={featuredAlbum.title}
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-primary-foreground">
                    <p className="text-sm font-medium opacity-80">{featuredAlbum.year}</p>
                    <h3 className="text-2xl font-display font-bold">{featuredAlbum.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
