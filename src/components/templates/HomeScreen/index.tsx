import { MovieCover } from "@/components/organisms/Cover";
import { IHomeTemplateProps } from "./interface";
import styled from "styled-components/native";
import { MovieSection } from "@/components/organisms/MovieSection";
import { isEven } from "@/utils/isEven";

const ScrollviewStyled = styled.ScrollView`
  padding-bottom: 20px;
`;
const SectionTitle = styled.Text`
  padding-top: 30px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.8%;
  line-height: 24px;
  font-family: "PlusJakartaSans-Bold";
  color: ${({ theme }: { theme: any }) => theme.colors.primary};
`;

const Container = styled.View`
  gap: 15px;
`;

export const HomeTemplate = ({
  top,
  sections,
  onPress,
  onMoreInfo,
  onPlay,
}: IHomeTemplateProps) => {
  return (
    <ScrollviewStyled>
      <MovieCover {...top} onMoreInfo={onMoreInfo} onPlay={onPlay} />
      {sections.map((section, index) => (
        <Container key={section.id}>
          <SectionTitle>{section.title}</SectionTitle>
          <MovieSection
            data={section.data || []}
            posterType={isEven(index) ? "portrait" : "landscape"}
            onPress={(item) => onPress(item, section.id)}
          />
        </Container>
      ))}
    </ScrollviewStyled>
  );
};
