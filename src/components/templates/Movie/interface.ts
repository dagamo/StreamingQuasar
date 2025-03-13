import { ICoverHeader } from "@/components/molecules/CoverHeader/interface";
import { ICover } from "@/components/organisms/Cover/interface";
import { MovieItem } from "@/interfaces/models/movie";

export interface IMovieTemplateProps
  extends Pick<ICoverHeader, "onBack">,
    Pick<ICover, "onPlay"> {
  info: MovieItem;
}
