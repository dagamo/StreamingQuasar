import { ButtonRounded } from "@/components/atoms/Buttons/Rounded";
import { Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import UserIcon from "@assets/icons/user.png";
import TV2 from "@assets/icons/tv2.png";
import PlayIcon from "@assets/icons/stream.png";
import { SquaredButton } from "@/components/atoms/Buttons/SquaredButton";
import { ICoverHeader } from "./interface";
import BackIcon from "@assets/icons/back.png";

const ButtonRoundedWhite = styled(ButtonRounded)`
  background-color: #e6e7e8;
`;
const ButtonTransparent = styled(ButtonRounded)`
  background-color: rgba(140, 140, 140, 0.2);
  border-width: 1px;
  border-color: rgba(140, 140, 140, 1);
`;

const PlayButton = styled(SquaredButton)`
  background-color: #fff;
`;

const ContainerHeader = styled.View`
  height: 100px;
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

const RightIcons = styled.View`
  flex-direction: row;
  gap: 15px;
`;

export const CoverHeader = ({ onBack }: ICoverHeader) => {
  return (
    <SafeAreaView>
      <ContainerHeader>
        {onBack ? (
          <ButtonRoundedWhite onPress={onBack}>
            <Image source={BackIcon} style={{ width: 20, height: 20 }} />
          </ButtonRoundedWhite>
        ) : (
          <PlayButton>
            <Image source={PlayIcon} />
          </PlayButton>
        )}
        <RightIcons>
          <ButtonTransparent>
            <Image source={TV2} />
          </ButtonTransparent>
          <TouchableOpacity>
            <Image source={UserIcon} />
          </TouchableOpacity>
        </RightIcons>
      </ContainerHeader>
    </SafeAreaView>
  );
};
