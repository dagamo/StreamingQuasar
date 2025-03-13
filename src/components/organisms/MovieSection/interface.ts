import { IMovieSection } from "@/interfaces/models/trending";

export interface IMovieSectionProps {
  data: IMovieSection["items"];
  posterType: "portrait" | "landscape" | "thumbnail";
}
