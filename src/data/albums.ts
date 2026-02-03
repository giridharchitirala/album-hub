export interface Track {
  id: string;
  title: string;
  duration: string;
  previewUrl?: string;
}

export interface Album {
  id: string;
  title: string;
  year: number;
  genre: string;
  coverImage: string;
  description: string;
  tracks: Track[];
  credits?: string;
}

// Placeholder album data - replace with your own content
export const albums: Album[] = [
  {
    id: "sunset-dreams",
    title: "Sunset Dreams",
    year: 2024,
    genre: "Electronic",
    coverImage: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=500&h=500&fit=crop",
    description: "A journey through ethereal soundscapes and dreamy melodies that capture the magic of golden hour.",
    tracks: [
      { id: "sd-1", title: "Golden Hour", duration: "3:42" },
      { id: "sd-2", title: "Waves of Light", duration: "4:15" },
      { id: "sd-3", title: "Drifting Away", duration: "3:58" },
      { id: "sd-4", title: "Horizon Line", duration: "4:32" },
      { id: "sd-5", title: "Last Light", duration: "5:01" },
    ],
    credits: "Produced, mixed, and mastered at Sunset Studios",
  },
  {
    id: "neon-nights",
    title: "Neon Nights",
    year: 2023,
    genre: "Synthwave",
    coverImage: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500&h=500&fit=crop",
    description: "Retro-futuristic beats that transport you to a neon-lit cityscape after dark.",
    tracks: [
      { id: "nn-1", title: "City Pulse", duration: "3:28" },
      { id: "nn-2", title: "Midnight Drive", duration: "4:45" },
      { id: "nn-3", title: "Electric Dreams", duration: "3:52" },
      { id: "nn-4", title: "Arcade Memories", duration: "4:10" },
      { id: "nn-5", title: "Neon Rain", duration: "4:38" },
      { id: "nn-6", title: "Dawn Patrol", duration: "5:22" },
    ],
    credits: "Inspired by the sounds of the 80s",
  },
  {
    id: "ocean-blues",
    title: "Ocean Blues",
    year: 2023,
    genre: "Ambient",
    coverImage: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=500&h=500&fit=crop",
    description: "Calming ambient pieces inspired by the depths and mysteries of the ocean.",
    tracks: [
      { id: "ob-1", title: "Deep Current", duration: "6:15" },
      { id: "ob-2", title: "Coral Garden", duration: "5:42" },
      { id: "ob-3", title: "Whale Song", duration: "7:01" },
      { id: "ob-4", title: "Tidal Flow", duration: "4:58" },
    ],
    credits: "Field recordings captured along the Pacific Coast",
  },
  {
    id: "urban-jungle",
    title: "Urban Jungle",
    year: 2022,
    genre: "Hip-Hop",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=500&fit=crop",
    description: "Hard-hitting beats and raw energy from the concrete jungle.",
    tracks: [
      { id: "uj-1", title: "Street Symphony", duration: "3:15" },
      { id: "uj-2", title: "Concrete Dreams", duration: "3:42" },
      { id: "uj-3", title: "Rush Hour", duration: "2:58" },
      { id: "uj-4", title: "Graffiti Walls", duration: "3:31" },
      { id: "uj-5", title: "Night Bus", duration: "4:05" },
    ],
    credits: "Featuring samples from city life",
  },
  {
    id: "aurora",
    title: "Aurora",
    year: 2022,
    genre: "Classical Crossover",
    coverImage: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=500&h=500&fit=crop",
    description: "A fusion of classical instrumentation with modern electronic production.",
    tracks: [
      { id: "au-1", title: "Northern Lights", duration: "5:28" },
      { id: "au-2", title: "Frozen Lake", duration: "4:15" },
      { id: "au-3", title: "Snow Dance", duration: "3:52" },
      { id: "au-4", title: "Winter Palace", duration: "6:10" },
      { id: "au-5", title: "Midnight Sun", duration: "4:45" },
    ],
    credits: "Recorded with the Northern Chamber Orchestra",
  },
  {
    id: "tropical-escape",
    title: "Tropical Escape",
    year: 2021,
    genre: "Chillout",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=500&fit=crop",
    description: "Feel the warm breeze and crystal waters with these laid-back tropical vibes.",
    tracks: [
      { id: "te-1", title: "Island Time", duration: "4:02" },
      { id: "te-2", title: "Palm Shadows", duration: "3:48" },
      { id: "te-3", title: "Sunset Cocktail", duration: "4:22" },
      { id: "te-4", title: "Ocean Breeze", duration: "3:55" },
      { id: "te-5", title: "Starlit Beach", duration: "5:15" },
    ],
    credits: "Recorded during a summer retreat",
  },
];

export const genres = [...new Set(albums.map((album) => album.genre))];
export const years = [...new Set(albums.map((album) => album.year))].sort((a, b) => b - a);
