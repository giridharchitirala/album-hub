import { useState, useMemo } from "react";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlbumCard } from "@/components/AlbumCard";
import { albums, genres, years } from "@/data/albums";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

export const AlbumGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const filteredAlbums = useMemo(() => {
    return albums.filter((album) => {
      const matchesSearch = album.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesGenre = !selectedGenre || album.genre === selectedGenre;
      const matchesYear = !selectedYear || album.year === selectedYear;
      return matchesSearch && matchesGenre && matchesYear;
    });
  }, [searchQuery, selectedGenre, selectedYear]);

  const hasFilters = selectedGenre || selectedYear;

  const clearFilters = () => {
    setSelectedGenre(null);
    setSelectedYear(null);
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search albums..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-xl h-12"
          />
        </div>

        {/* Filter Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded-xl h-12 px-6">
              <Filter className="w-4 h-4 mr-2" />
              Filter
              {hasFilters && (
                <Badge variant="secondary" className="ml-2">
                  {(selectedGenre ? 1 : 0) + (selectedYear ? 1 : 0)}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Genre</DropdownMenuLabel>
            {genres.map((genre) => (
              <DropdownMenuItem
                key={genre}
                onClick={() => setSelectedGenre(genre === selectedGenre ? null : genre)}
                className={selectedGenre === genre ? "bg-primary/10" : ""}
              >
                {genre}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Year</DropdownMenuLabel>
            {years.map((year) => (
              <DropdownMenuItem
                key={year}
                onClick={() => setSelectedYear(year === selectedYear ? null : year)}
                className={selectedYear === year ? "bg-primary/10" : ""}
              >
                {year}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Active Filters */}
      {hasFilters && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {selectedGenre && (
            <Badge variant="secondary" className="gap-1">
              {selectedGenre}
              <button onClick={() => setSelectedGenre(null)}>
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
          {selectedYear && (
            <Badge variant="secondary" className="gap-1">
              {selectedYear}
              <button onClick={() => setSelectedYear(null)}>
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear all
          </Button>
        </div>
      )}

      {/* Albums Grid */}
      {filteredAlbums.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAlbums.map((album, index) => (
            <AlbumCard key={album.id} album={album} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-muted flex items-center justify-center">
            <Search className="w-10 h-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-display font-semibold">No albums found</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Try adjusting your search or filters to find what you're looking for.
          </p>
          <Button variant="outline" onClick={() => { setSearchQuery(""); clearFilters(); }}>
            Reset filters
          </Button>
        </div>
      )}
    </div>
  );
};
