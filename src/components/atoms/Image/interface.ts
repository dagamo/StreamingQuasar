export interface ImageObject {
  url: string;
  aspectRatio: "2/3" | "16/9" | "4/3";
}
export interface OptimizedImageProps {
  image: ImageObject;
  width?: number;
  style?: object;
}
