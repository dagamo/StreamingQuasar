import { MovieItem } from "./movie";

export interface Trending {
  id: string;
  title: string;
  layout: string;
  items: MovieItem[];
}
