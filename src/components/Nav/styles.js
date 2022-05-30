import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 87px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;
    height: 66px;
    background: var(--white);
    overflow: hidden;
`;

export const ImgLogo = styled.img`
    width: 32px;
    height: 32px;
`;

export const InfoPageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NamePage = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;

    color: var(--purple);
    margin-left: 12px;
`;

export const PageIcon = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;

    color: #E2E2E2;
    margin-left: 10px;
`;

export const SubPageName = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-transform: capitalize;

    color: var(--gray);
    margin-left: 8px;
`;

export const UserBarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const UserOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 24px;
    cursor: pointer;
`;

export const UserDivider = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;

    color: #E2E2E2;
    margin-left: 51px;
    margin-right: 12px;
`;

export const HelpLogo = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

export const OptionsLogo = styled.img`
    width: 15px;
    height: 15px;
    margin-left: 24px;
    cursor: pointer;
`;

export const UserAvatar = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 50%;

    background-color: var(--purple);
`;

export const UserName = styled.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-transform: capitalize;

    color: var(--text);
    margin-left: 8px;
`;
