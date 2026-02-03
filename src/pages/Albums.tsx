import { Layout } from "@/components/Layout";
import { AlbumGrid } from "@/components/AlbumGrid";

const Albums = () => {
  return (
    <Layout>
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              All <span className="text-gradient">Albums</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse the complete collection of releases. Each album is a unique journey through sound.
            </p>
          </div>

          {/* Album Grid with Search & Filter */}
          <AlbumGrid />
        </div>
      </div>
    </Layout>
  );
};

export default Albums;
