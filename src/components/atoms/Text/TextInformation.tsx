import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const TextInformation = styled.Text`
  font-size: ${({ size }: { size: number }) => size}px;
  font-weight: 700;
  font-family: "PlusJakartaSans-Regular";
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
`;
