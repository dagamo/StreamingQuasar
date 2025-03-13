import { MovieCover } from "@/components/organisms/Cover";
import { ScrollView, Text, View } from "react-native";
import { IMovieTemplateProps } from "./interface";
import { CoverHeader } from "@/components/molecules/CoverHeader";
import { MovieInformation } from "@/components/organisms/MovieInformation";

export const MovieTemplate = ({
  info,
  onBack,
  onPlay,
}: IMovieTemplateProps) => {
  return (
    <ScrollView>
      <MovieCover
        src={info.posters.portrait.url}
        title={info.title}
        year={info.year}
        duration={info.duration}
        rating={`${info.rating} ${info.classification.rating}`}
        isTopMovie={info.isTopMovie}
        Header={<CoverHeader onBack={onBack} />}
        hideButtons={["info"]}
        onPlay={onPlay}
      />
      <MovieInformation description={info.description} />
    </ScrollView>
  );
};
