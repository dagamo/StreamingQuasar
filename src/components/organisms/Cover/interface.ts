import { MovieItem } from "@/interfaces/models/movie";
import { ReactNode } from "react";
export type TCoverButton = "play" | "info";
export interface ICover
  extends Pick<
    MovieItem,
    "title" | "duration" | "year" | "rating" | "isTopMovie"
  > {
  src: string;
  Header?: ReactNode;
  hideButtons?: TCoverButton[];
  onMoreInfo?: () => void;
}
