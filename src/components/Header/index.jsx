import React from "react";
import LogoImg from "./../../assets/Logo.svg";
import { Container, ImgLogo } from "./styles";

export default function Header() {
  return (
    <Container>
      <ImgLogo src={LogoImg} />
    </Container>
  );
}
