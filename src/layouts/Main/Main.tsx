import { Outlet } from "react-router-dom";

import { StyledMainContainer } from "./Main.style";

import Header from "../Header/Header";
import Section from "../Section/Section";

export default function Main() {
  return (
    <StyledMainContainer>
      <Header />
      <Section>
        <Outlet />
      </Section>
    </StyledMainContainer>
  );
};