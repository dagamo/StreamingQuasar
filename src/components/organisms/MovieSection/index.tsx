import { FlatList } from "react-native";
import { IMovieSectionProps } from "./interface";
import { MovieItem } from "@/interfaces/models/movie";
import Image from "@/components/atoms/Image/index";
import { useCallback } from "react";
import { ImageObject } from "@/components/atoms/Image/interface";
import styled from "styled-components/native";

const ImageContainer = styled.TouchableOpacity`
  margin-right: 8px;
`;
export const MovieSection = ({
  data,
  posterType,
  onPress,
}: IMovieSectionProps) => {
  const renderImage = useCallback(({ item }: { item: MovieItem }) => {
    if (posterType === "portrait") {
      return (
        <ImageContainer onPress={() => onPress(item)}>
          <Image image={item.posters.portrait as ImageObject} width={112} />
        </ImageContainer>
      );
    }
    return (
      <ImageContainer onPress={() => onPress(item)}>
        <Image image={item.posters.landscape as ImageObject} width={213} />
      </ImageContainer>
    );
  }, []);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderImage}
    />
  );
};
