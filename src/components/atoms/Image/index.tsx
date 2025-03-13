import React from "react";
import { StyleSheet, Dimensions } from "react-native";

import { OptimizedImageProps } from "./interface";
import { FasterImageView } from "@candlefinance/faster-image";

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  image,
  width = Dimensions.get("window").width,
  style,
}) => {
  const getAspectRatioValue = (aspect: string): number => {
    const [widthPart, heightPart] = aspect.split("/").map(Number);
    return widthPart / heightPart;
  };
  const aspectRatio = getAspectRatioValue(image.aspectRatio);
  const height = width / aspectRatio;

  return (
    <FasterImageView
      source={{
        transitionDuration: 0.3,
        borderRadius: 16,
        cachePolicy: "discWithCacheControl",
        showActivityIndicator: true,
        url: image.url,
        resizeMode: "cover",
      }}
      style={{
        width,
        height,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.2)",
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    overflow: "hidden",
  },
  loader: {
    transform: [{ translateX: -15 }, { translateY: -15 }],
  },
});

export default OptimizedImage;
