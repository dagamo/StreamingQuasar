import { HomeTemplate } from "@/components/templates/HomeScreen";
import { useMemo } from "react";
import trending from "@/utils/data.json";
import { getTopMovie } from "@/utils/getTopMovie";
import { ICover } from "@/components/organisms/Cover/interface";

const HomeScreen = () => {
  const topMovie: ICover = useMemo(() => {
    const topMovie = getTopMovie(trending.containers);
    return {
      title: topMovie?.title || "",
      duration: topMovie?.duration || "",
      year: topMovie?.year || 0,
      rating: `${topMovie?.rating} - ${topMovie?.classification.rating}` || "",
      src: topMovie?.posters?.portrait?.url || "",
      description: topMovie?.description || "",
    };
  }, []);
  return <HomeTemplate top={topMovie} />;
};

export default HomeScreen;
