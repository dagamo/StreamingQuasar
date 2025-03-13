import { HomeTemplate } from "@/components/templates/HomeScreen";
import { useCallback, useMemo } from "react";
import movies from "@/utils/data.json";
import { getTopMovie } from "@/utils/getTopMovie";
import { TMovieCover } from "@/components/organisms/Cover/interface";
import { MovieItem } from "@/interfaces/models/movie";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/interfaces/types/root-navigation";

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const topMovie: TMovieCover = useMemo(() => {
    const topMovie = getTopMovie(movies.containers);
    return {
      title: topMovie?.title || "",
      duration: topMovie?.duration || "",
      year: topMovie?.year || 0,
      rating: `${topMovie?.rating} ${topMovie?.classification.rating}` || "",
      src: topMovie?.posters?.portrait?.url || "",
      isTopMovie: topMovie?.isTopMovie || false,
    };
  }, []);
  const sections = useMemo(
    () =>
      movies.containers
        .filter((container) => container.id !== "trending")
        .map((container) => ({
          title: container.title,
          data: container.items,
          id: container.id,
        })),
    []
  );

  const onPress = useCallback((item: MovieItem, sectionId: string) => {
    navigation.navigate("Movie", { sectionId, movieId: item.id });
  }, []);

  const onMoreInfo = useCallback(() => {
    const topMovie = getTopMovie(movies.containers);
    navigation.navigate("Movie", {
      sectionId: "trending",
      movieId: topMovie?.id || "",
    });
  }, []);

  const onPlay = useCallback(() => {
    navigation.navigate("Player");
  }, []);

  return (
    <HomeTemplate
      top={topMovie}
      sections={sections}
      onPress={onPress}
      onMoreInfo={onMoreInfo}
      onPlay={onPlay}
    />
  );
};

export default HomeScreen;
