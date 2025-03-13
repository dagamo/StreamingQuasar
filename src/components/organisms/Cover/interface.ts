import { MovieItem } from "@/interfaces/models/movie";
import { ReactNode } from "react";
export type TCoverButton = "play" | "info";
export interface TMovieCover
  extends Pick<
    MovieItem,
    "title" | "duration" | "year" | "rating" | "isTopMovie"
  > {
  src: string;
}
export interface ICover extends TMovieCover {
  Header?: ReactNode;
  hideButtons?: TCoverButton[];
  onMoreInfo?: () => void;
  onPlay: () => void;
}
