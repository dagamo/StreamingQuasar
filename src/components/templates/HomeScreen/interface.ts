import { ICover } from "@/components/organisms/Cover/interface";
import { MovieItem } from "@/interfaces/models/movie";

export interface IHomeTemplateProps {
  top: ICover;
  sections: {
    title: string;
    data: MovieItem[];
    id: string;
  }[];
}
