import { Outlet } from "react-router";
import styled from "styled-components";

import { Navigation } from "./Navigation";

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  min-width: 0;
  padding: 32px;
`;

function Layout() {
  return (
    <LayoutWrapper>
      <Navigation />
      <Main>
        <Outlet />
      </Main>
    </LayoutWrapper>
  );
}

export { Layout };