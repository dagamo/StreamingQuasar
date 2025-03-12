import { MovieItem } from "@/interfaces/models/movie";

export interface ICover
  extends Pick<MovieItem, "title" | "duration" | "year" | "rating"> {
  description: string;
  src: string;
}
