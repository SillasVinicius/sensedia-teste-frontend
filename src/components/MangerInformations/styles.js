import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 153px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--purple);
    width: 100%;
    height: 100px;
`;

export const InformationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:nth-child(n+2) {
    margin-left: 50px;
  }
`;

export const InformationLogo = styled.img`
    width: 50px;
    height: 52px;
    margin-right: 12px;
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const DescriptionSubName = styled.h1`
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: var(--white);
    margin-top: 12px;
`;

export const DescriptionName = styled.h2`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: var(--white);
`;


