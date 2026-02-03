import { Link } from "react-router-dom";
import { ArrowRight, Music, Award, Heart, Headphones } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { albums } from "@/data/albums";

const About = () => {
  return (
    <Layout>
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero opacity-10" />
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                  The Story Behind the <span className="text-gradient">Music</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Every track tells a story. Every album is a chapter. 
                  Welcome to the world where melodies meet emotions.
                </p>
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/albums">
                    Explore Music
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="relative">
                  <div className="absolute -inset-4 gradient-hero rounded-3xl blur-2xl opacity-30" />
                  <img
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop"
                    alt="Artist"
                    className="relative w-full max-w-md mx-auto aspect-square object-cover rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                About the <span className="text-gradient">Artist</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  With a passion for blending genres and pushing boundaries, the journey 
                  began in a small home studio with nothing but a keyboard and a dream.
                </p>
                <p>
                  Over the years, that dream has evolved into a collection of albums that 
                  span electronic, ambient, hip-hop, and classical crossover styles. Each 
                  release represents a new exploration of sound and emotion.
                </p>
                <p>
                  The music draws inspiration from nature, city life, and the full spectrum 
                  of human experience. Whether you're looking for energy or calm, there's 
                  a track waiting for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              What Makes It <span className="text-gradient">Special</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Music,
                  title: "Original Sound",
                  description: "Every track is composed, produced, and mastered with care and attention to detail.",
                },
                {
                  icon: Award,
                  title: "Quality First",
                  description: "High-fidelity audio that sounds great on any system, from earbuds to studio monitors.",
                },
                {
                  icon: Heart,
                  title: "Made with Love",
                  description: "Each album is a labor of love, created to connect and resonate with listeners.",
                },
                {
                  icon: Headphones,
                  title: "For Everyone",
                  description: "Music that transcends genres and speaks to a wide audience.",
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="text-center p-6 rounded-2xl bg-card border border-border hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl gradient-hero flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Discography Summary */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
              The <span className="text-gradient">Discography</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {albums.map((album, index) => (
                <Link
                  key={album.id}
                  to={`/albums/${album.id}`}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </Link>
              ))}
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/albums">
                View Full Discography
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              For bookings, collaborations, or just to say hello, reach out through social media 
              or send an email.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="mailto:hello@artist.com">
                Get in Touch
              </a>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
