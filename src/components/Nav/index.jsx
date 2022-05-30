import React from "react";
import LogoImg from "./../../assets/Logo_purple.svg";
import HelpImg from "./../../assets/bar_help.svg";
import OptionsImg from "./../../assets/bar_options.svg";
import {
  Container,
  HelpLogo,
  ImgLogo,
  InfoPageWrapper,
  NamePage,
  OptionsLogo,
  PageIcon,
  SubPageName,
  UserAvatar,
  UserBarWrapper,
  UserDivider,
  UserInfo,
  UserName,
  UserOption,
} from "./styles";

export default function Nav({ namePage, subPageName, userName }) {
  return (
    <Container>
      <InfoPageWrapper>
        <ImgLogo src={LogoImg} />
        <NamePage>{namePage}</NamePage>
        <PageIcon>{">"}</PageIcon>
        <SubPageName>{subPageName}</SubPageName>
      </InfoPageWrapper>
      <UserBarWrapper>
        <UserOption>
          <HelpLogo src={HelpImg} />
          <OptionsLogo src={OptionsImg} />
        </UserOption>
        <UserInfo>
          <UserAvatar />
          <UserName>{userName}</UserName>
        </UserInfo>
      </UserBarWrapper>
    </Container>
  );
}
