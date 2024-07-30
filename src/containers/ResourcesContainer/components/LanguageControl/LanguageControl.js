import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LocalStorage from "../../../../services/localStorage";
import { useTranslation } from "react-i18next";

const StyledButtonGroup = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  background: transparent;
  color: ${(props) => (props.active ? "#1976d2" : "#9e9e9e")};
  border: 1px solid ${(props) => (props.active ? "#1976d2" : "#9e9e9e")};
  padding: 0.25em 1em;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.active ? "#004ba0" : "#616161")};
    color: white;
  }
`;

export default function LanguageControl() {
  const { t, i18n } = useTranslation(["LanguageControl"]);

  const [activeLanguage, setActiveLanguage] = useState(i18n.language);

  useEffect(() => {
    setActiveLanguage(i18n.language);
  }, i18n.language);

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const renderButton = (lang, label) => (
    <StyledButton
      active={activeLanguage === lang}
      onClick={() => setLanguage(lang)}
    >
      {label}
    </StyledButton>
  );

  return (
    <StyledButtonGroup>
      {renderButton("en-US", t("ENGLISH"))}
      {renderButton("es-ES", t("SPANISH"))}
    </StyledButtonGroup>
  );
}
