import React from "react";
import LocalTypeImg from "./../../assets/panel_local_type.svg";
import LevelImg from "./../../assets/panel_level.svg";
import WinsImg from "./../../assets/panel_wins.svg";
import {
  Container,
  DescriptionName,
  DescriptionSubName,
  DescriptionWrapper,
  InformationLogo,
  InformationWrapper,
} from "./styles";

export default function MangerInformations() {
  return (
    <Container>
      <InformationWrapper>
        <InformationLogo src={LocalTypeImg} />
        <DescriptionWrapper>
          <DescriptionName>Tipo de Quadra</DescriptionName>
          <DescriptionSubName>Society</DescriptionSubName>
        </DescriptionWrapper>
      </InformationWrapper>
      <InformationWrapper>
        <InformationLogo src={LocalTypeImg} />
        <DescriptionWrapper>
          <DescriptionName>Nível</DescriptionName>
          <DescriptionSubName>Semi-profissional</DescriptionSubName>
        </DescriptionWrapper>
      </InformationWrapper>
      <InformationWrapper>
        <InformationLogo src={LocalTypeImg} />
        <DescriptionWrapper>
          <DescriptionName>Vitórias</DescriptionName>
          <DescriptionSubName>345</DescriptionSubName>
        </DescriptionWrapper>
      </InformationWrapper>
    </Container>
  );
}
