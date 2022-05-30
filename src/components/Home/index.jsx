import React from "react";
import Header from "../Header";
import Nav from "../Nav";
import MangerInformations from "../MangerInformations";
import { Container } from "./styles";
import UsersList from "../UsersList";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Nav namePage="welcome" subPageName="register" userName="user name" />
        <MangerInformations />
        <UsersList />
      </Container>
    </>
  );
}
