import { useRef } from "react";
import { View } from "react-native";
import VideoPlayer, { type VideoPlayerRef } from "react-native-video-player";
export const VideoPlayerScreen = () => {
  const playerRef = useRef<VideoPlayerRef>(null);
  return (
    <View style={{ flex: 1 }}>
      <VideoPlayer
        ref={playerRef}
        fullscreen={true}
        endWithThumbnail
        thumbnail={{
          uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
        }}
        source={{
          uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        }}
        onError={(e) => console.log(e)}
        showDuration={true}
      />
    </View>
  );
};
