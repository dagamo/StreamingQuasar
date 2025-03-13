import { Image, ImageBackground, Text } from "react-native";
import { ICover, TCoverButton } from "./interface";
import LinearGradient from "react-native-linear-gradient";
import { CoverHeader } from "@/components/molecules/CoverHeader";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components";
import TVWhiteIcon from "@assets/icons/TVWhite.png";
import { LargeButton } from "@/components/atoms/Buttons/LargeButton";
import InfoIcon from "@assets/icons/info.png";
import PlayBlackIcon from "@assets/icons/playBlack.png";
import { useCallback } from "react";

const Content = styled.View`
  gap: 15px;
  min-height: 200px;
`;
const Title = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
  font-size: 36px;
  font-family: "PlusJakartaSans-Bold";
  font-weight: 900;
  text-align: center;
`;

const Information = styled.View`
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const TextInformation = styled.Text`
  font-size: ${({ size }: { size: number }) => size}px;
  font-weight: 700;
  font-family: "PlusJakartaSans-Regular";
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
`;

const PlayText = styled.Text`
  color: #000;
  font-size: 14px;
  font-family: "PlusJakartaSans-Regular";
  font-weight: 700;
  letter-spacing: -0.6%;
`;

const InfoText = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 700;
  font-family: "PlusJakartaSans-Regular";
  letter-spacing: -0.6%;
`;

const Rating = styled.View`
  border-width: 1px;
  border-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const GroupButtons = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 10px;
  justify-content: center;
`;

export const MovieCover = ({
  src,
  title,
  year,
  rating,
  isTopMovie,
  duration,
  Header,
  onMoreInfo = () => {},
  onPlay,
  hideButtons = [],
}: ICover) => {
  const isHidden = useCallback(
    (button: TCoverButton) => hideButtons.includes(button),
    []
  );
  return (
    <ImageBackground
      source={{ uri: src }}
      style={{ minHeight: 500 }}
      blurRadius={5}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.01)", "rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
        locations={[0, 0.5, 0.7]}
        style={{ flex: 1, width: "100%", justifyContent: "space-between" }}
      >
        {Header ? Header : <CoverHeader></CoverHeader>}
        <Content>
          <Title>{title}</Title>
          <Information>
            <TextInformation size={14}>{year}</TextInformation>
            <TextInformation size={14}>{duration}</TextInformation>
            <Rating>
              <TextInformation>{rating}</TextInformation>
            </Rating>
          </Information>
          {isTopMovie && (
            <Information>
              <Image source={TVWhiteIcon}></Image>
              <TextInformation size={18}>#1 in Movies Today</TextInformation>
            </Information>
          )}
          <GroupButtons>
            <LargeButton color="primary" width={165} onPress={onPlay}>
              <Image source={PlayBlackIcon}></Image>
              <PlayText>Play</PlayText>
            </LargeButton>
            {!isHidden("info") && (
              <LargeButton color="secondary" width={165} onPress={onMoreInfo}>
                <Image source={InfoIcon}></Image>
                <InfoText>More Info</InfoText>
              </LargeButton>
            )}
          </GroupButtons>
        </Content>
      </LinearGradient>
    </ImageBackground>
  );
};
