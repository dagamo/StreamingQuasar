import { ICover, TMovieCover } from "@/components/organisms/Cover/interface";
import { MovieItem } from "@/interfaces/models/movie";

export interface IHomeTemplateProps extends Pick<ICover, "onPlay"> {
  top: TMovieCover;
  sections: {
    title: string;
    data: MovieItem[];
    id: string;
  }[];
  onPress: (item: MovieItem, sectionId: string) => void;
  onMoreInfo: () => void;
}
