import styled from 'styled-components';
import { device } from '../../styles/responsive';

export const Text = styled.h1`
    margin: 0;
    text-align: center;
    font-family: 'Barlow Condensed';
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    font-weight: 400;
    color: ${({ theme }) => theme.pureWhiteColor};

    ${device.bigMobile} {
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.375px;
    }

    ${device.tablet} {
        margin-top: 40px;
        padding-left: 38px;
        text-align: start;
    }

    ${device.smallDesktop} {
        margin-top: 76px;
        padding-left: 98px;
        font-size: 28px;
        line-height: 34px;
        letter-spacing: 4.725px;
    }

    ${device.desktop} {
        padding-left: 166px;
    }
`;

export const Number = styled.span`
    margin-right: 18px;
    font-weight: 700;
    opacity: 0.25;
`;
