import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../../../styles/responsive';

export const NavigationLink = styled(NavLink)`
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 37px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.36px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.pureWhiteColor};
    text-decoration: none;

    ${device.smallDesktop} {
        margin-right: 48px;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
    }

    &:last-child {
        margin-right: 0;
    }

    &:hover::before {
        opacity: 0.5;
    }

    &[class*='active']::before {
        opacity: 1;
    }

    &::before {
        content: '';
        position: absolute;
        bottom: -35px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${({ theme }) => theme.pureWhiteColor};
        opacity: 0;
        transition: opacity 1s;
    }
`;
