import { ICoverHeader } from "@/components/molecules/CoverHeader/interface";
import { MovieItem } from "@/interfaces/models/movie";

export interface IMovieTemplateProps extends Pick<ICoverHeader, "onBack"> {
  info: MovieItem;
}
