import styled from "styled-components/native";
import WorkingIcon from "@assets/icons/teamwork.png";
import { TextInformation } from "@/components/atoms/Text/TextInformation";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Image = styled.Image`
  width: 150px;
  height: 150px;
`;

export const MaintenanceTemplate = () => {
  return (
    <Container>
      <Image source={WorkingIcon} />
      <TextInformation size={20}>Page in maintenance</TextInformation>
    </Container>
  );
};
