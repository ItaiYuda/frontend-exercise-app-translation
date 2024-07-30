import React from "react";
import styled from "styled-components";
import { HeaderText, SubHeaderText } from "../../../../styles/commonStyles";
import useTranslation from "../../../../hooks/useTranslation";
import LanguageControl from "../LanguageControl/LanguageControl";

const ResourceHeaderText = styled(HeaderText)`
  color: #686868;
  margin-bottom: 3px;
`;

const ResourcesHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function ResourcesHeader() {
  const { t } = useTranslation(["ResourcesHeader"]);

  return (
    <ResourcesHeaderContainer>
      <div>
        <ResourceHeaderText>{t("TITLE")}</ResourceHeaderText>
        <SubHeaderText>{t("SUBTITLE")}</SubHeaderText>
      </div>
      <LanguageControl />
    </ResourcesHeaderContainer>
  );
}
