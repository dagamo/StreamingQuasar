import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

const DescriptionContainer = styled.View`
  margin-top: 20px;
  width: 100%;
  padding: 0 15px;
  margin-bottom: 10px;
  align-items: center;
`;
const SectionTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 600;
  letter-spacing: -0.8px;
  line-height: 24px;
  font-family: "PlusJakartaSans-Bold";
  color: ${({ theme }: { theme: any }) => theme.colors.primary};
`;

const TextInformation = styled.Text`
  font-size: ${({ size }: { size: number }) => size}px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  font-family: "PlusJakartaSans-Regular";
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
`;
export const MovieInformation = ({ description }: { description: string }) => {
  return (
    <DescriptionContainer>
      <SectionTitle>Description</SectionTitle>
      <TextInformation size={"14"}>{description}</TextInformation>
    </DescriptionContainer>
  );
};
