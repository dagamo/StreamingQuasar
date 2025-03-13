import { MovieItem } from "./movie";

export interface IMovieSection {
  id: string;
  title: string;
  layout: string;
  items: MovieItem[];
}
