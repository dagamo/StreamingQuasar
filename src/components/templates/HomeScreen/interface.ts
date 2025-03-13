import { ICover } from "@/components/organisms/Cover/interface";
import { IMovieSectionProps } from "@/components/organisms/MovieSection/interface";
import { MovieItem } from "@/interfaces/models/movie";
import { IMovieSection } from "@/interfaces/models/trending";

export interface IHomeTemplateProps {
  top: ICover;
  sections: {
    title: string;
    data: MovieItem[];
    id: string;
  }[];
  onPress: (item: MovieItem, sectionId: string) => void;
  onMoreInfo: () => void;
}
