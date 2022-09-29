import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { StyledMainContainer } from "./Main.style";

export default function Main() {
  useEffect(() => {
    console.log('side effect main');
  }, []);

  return (
    <StyledMainContainer>
      <Header />
      <Outlet />
    </StyledMainContainer>
  );
};