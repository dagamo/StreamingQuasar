export interface Poster {
  url: string;
  aspectRatio: string;
}

export interface Posters {
  portrait: Poster;
  landscape: Poster;
  thumbnail: Poster;
}

export interface CastMember {
  characterName: string;
  actorName: string;
}

export interface Crew {
  directors: string[];
  producers: string[];
  writers: string[];
}

export interface Classification {
  rating: string;
  advisoryContent: string[];
}
export interface MovieItem {
  id: string;
  title: string;
  year: number;
  duration: string;
  rating: string;
  quality: string;
  description: string;
  isTopMovie: boolean;
  similarContent: string[];
  posters: Posters;
  cast: CastMember[];
  crew: Crew;
  classification: Classification;
}
