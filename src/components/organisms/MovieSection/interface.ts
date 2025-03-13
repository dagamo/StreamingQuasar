import { MovieItem } from "@/interfaces/models/movie";
import { IMovieSection } from "@/interfaces/models/trending";

export interface IMovieSectionProps {
  data: IMovieSection["items"];
  posterType: "portrait" | "landscape" | "thumbnail";
  onPress: (item: MovieItem) => void;
}
