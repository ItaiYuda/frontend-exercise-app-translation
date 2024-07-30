import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import HeaderPanel from "./components/HeaderPanel/HeaderPanel";
import { GlobalStyle } from "./styles/appDefaultStyles";
import ResourcesContainer from "./containers/ResourcesContainer/ResourcesContainer";
import { headerPanelHeight, VerticalContainer } from "./styles/commonStyles";
import useTranslation from "./hooks/useTranslation";

const ApplicationContainer = styled(VerticalContainer)`
  min-height: calc(100vh - ${headerPanelHeight});
`;

const MainContainer = styled.main`
  display: flex;
  flex: 1;
  position: relative;
  top: ${headerPanelHeight};
`;

function App() {
  const { isLoaded } = useTranslation();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={null}>
      <GlobalStyle />
      <ApplicationContainer>
        <HeaderPanel />
        <MainContainer>
          <ResourcesContainer />
        </MainContainer>
      </ApplicationContainer>
    </Suspense>
  );
}

export default App;
