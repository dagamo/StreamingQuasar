import { CoverHome } from "@/components/organisms/Cover";

import styled from "styled-components/native";
import { IHomeTemplateProps } from "./interface";
import { SectionList } from "react-native";

const Container = styled.View`
  flex: 1;
`;
const CoverContainer = styled.View`
  flex: 1.2;
  background-color: red;
`;
const Body = styled.View`
  flex: 1;
  background-color: blue;
`;
export const HomeTemplate = ({ top }: IHomeTemplateProps) => {
  return (
    <SectionList
      sections={[{ title: "Top", data: [] }]}
      ListHeaderComponent={<CoverHome {...top} />}
    />
  );
};
