import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 12px;
    padding-left: 248px;
    padding-right: 248px;
    width: 100%;
    background: var(--white);
    overflow: hidden;
    position: absolute;
    top: 252px;
    left: 0;
`;

export const Title = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    color: var(--text);
`;

export const InputSearch = styled.input`
    height: 60px;
    width: 100%;
    background: rgba(61, 61, 61, 0.06);
    border-radius: 4px 4px 0px 0px;
    outline: none;
    padding: 12px;
    margin-top: 52px;
`;

export const TableUsersWrapper = styled.div`
    margin-top: 40px;
    width: 100%;
    overflow: hidden;
`;
