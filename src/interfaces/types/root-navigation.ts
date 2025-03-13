import { MovieItem } from "../models/movie";

export type RootStackParamList = {
  Home: undefined;
  Movie: { sectionId: string; movieId: string };
  Player: undefined;
};
