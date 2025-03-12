import { MovieItem } from "@/interfaces/models/movie";
import { Trending } from "@/interfaces/models/trending";

export const getTopMovie = (sections: Trending[]): MovieItem | undefined => {
  return sections.reduce((topMovie: MovieItem | undefined, section) => {
    if (topMovie) return topMovie;
    const foundTopMovie = section.items.find((item) => item.isTopMovie);
    return foundTopMovie || topMovie;
  }, undefined);
};
