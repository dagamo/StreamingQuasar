import { HomeTemplate } from "@/components/templates/HomeScreen";
import { useMemo } from "react";
import movies from "@/utils/data.json";
import { getTopMovie } from "@/utils/getTopMovie";
import { ICover } from "@/components/organisms/Cover/interface";

const HomeScreen = () => {
  const topMovie: ICover = useMemo(() => {
    const topMovie = getTopMovie(movies.containers);
    return {
      title: topMovie?.title || "",
      duration: topMovie?.duration || "",
      year: topMovie?.year || 0,
      rating: `${topMovie?.rating} ${topMovie?.classification.rating}` || "",
      src: topMovie?.posters?.portrait?.url || "",
      description: topMovie?.description || "",
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
  return <HomeTemplate top={topMovie} sections={sections} />;
};

export default HomeScreen;
