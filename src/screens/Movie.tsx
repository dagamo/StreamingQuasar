import { MovieTemplate } from "@/components/templates/Movie";
import { MovieItem } from "@/interfaces/models/movie";
import { useCallback, useMemo } from "react";
import movies from "@/utils/data.json";
import { RootStackParamList } from "@/interfaces/types/root-navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const MovieScreen = ({
  route,
}: {
  route?: { params: { movieId: string; sectionId: string } };
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const getMovieInfo = useMemo(() => {
    const section = movies.containers.find(
      (container) => container.id === route?.params.sectionId
    );
    return section?.items.find((item) => item.id === route?.params.movieId);
  }, [route?.params]);

  const onBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const onPlay = useCallback(() => {
    navigation.navigate("Player");
  }, []);

  return (
    <MovieTemplate
      info={getMovieInfo || ({} as MovieItem)}
      onBack={onBack}
      onPlay={onPlay}
    />
  );
};

export default MovieScreen;
