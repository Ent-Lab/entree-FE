import { Outlet } from "react-router-dom";

import { StyledMainContainer } from "./Main.style";

import Header from "../Header/Header";
import Section from "../Section/Section";
import Sidebar from "../Sidebar/Sidebar";

export default function Main() {
  return (
    <StyledMainContainer>
      <Header />
      <Section>
        <Sidebar />
        <Outlet />
      </Section>
    </StyledMainContainer>
  );
};