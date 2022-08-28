import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../../../../styles/responsive';

export const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 34px;

    ${device.bigMobile} {
        margin-top: 56px;
    }

    ${device.smallDesktop} {
        flex-direction: column;
        margin-top: 0;
    }
`;

export const Link = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    width: 40px;
    height: 40px;
    font-family: 'Bellefair';
    font-size: 16px;
    line-height: 18px;
    color: ${({ theme }) => theme.pureWhiteColor};
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 50%;
    transition: color 0.3s, background-color 0.3s, border 0.3s;
    text-decoration: none;
    cursor: pointer;

    &:last-child {
        margin-right: 0;
    }

    &[class*='active'] {
        color: ${({ theme }) => theme.blackColor};
        background-color: ${({ theme }) => theme.pureWhiteColor};
        border: none;
    }

    ${device.bigMobile} {
        width: 60px;
        height: 60px;
        font-size: 24px;
        line-height: 28px;
    }

    ${device.smallDesktop} {
        margin-left: 98px;
        margin-bottom: 32px;
        width: 80px;
        height: 80px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    ${device.desktop} {
        margin-left: 165px;
        margin-right: 0;
    }
`;
