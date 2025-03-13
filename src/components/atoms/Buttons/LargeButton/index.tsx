import { TVariants } from "@/interfaces/types/variant";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const LargeButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 40px;
  border-radius: 20px;
  width: ${({ width }: { width: string }) => width}px;
  background-color: ${({
    color,
    theme,
  }: {
    color: TVariants;
    theme: DefaultTheme;
  }) => theme.colors[color]};
`;
