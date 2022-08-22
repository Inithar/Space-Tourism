import styled from 'styled-components';
import { Description } from '../../components/styled-elements/description/Description.styles';
import { device } from '../../styles/responsive';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    padding: 0 24px;

    ${device.bigMobile} {
        margin-top: 75px;
        padding: 0 20%;
    }

    ${device.tablet} {
        margin-top: 106px;
        padding: 0 21%;
    }

    ${device.smallDesktop} {
        flex-direction: row;
        margin-top: 251px;
        padding: 0 165px 131px;
    }
`;

export const TextContainer = styled.div`
    ${device.smallDesktop} {
        width: 450px;
    }
`;

export const Header = styled.h1`
    margin: 0;
    text-align: center;
    font-family: 'Barlow Condensed';
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    font-weight: 400;
    color: ${({ theme }) => theme.textColor};

    ${device.bigMobile} {
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.375px;
    }

    ${device.smallDesktop} {
        text-align: start;
        font-size: 28px;
        line-height: 34px;
        letter-spacing: 4.725px;
    }
`;

export const StyledSpan = styled.span`
    display: block;
    margin-top: 16px;
    font-family: 'Bellefair';
    font-size: 80px;
    line-height: 100px;
    color: ${({ theme }) => theme.pureWhiteColor};

    ${device.bigMobile} {
        margin-top: 24px;
        font-size: 120px;
        line-height: 120px;
    }

    ${device.tablet} {
        font-size: 150px;
        line-height: 150px;
    }

    ${device.smallDesktop} {
        line-height: 172px;
    }
`;

export const Text = styled(Description)`
    margin-top: 16px;

    ${device.bigMobile} {
        margin-top: 24px;
    }
`;

export const Button = styled.button`
    margin-top: 81px;
    margin-bottom: 48px;
    width: 150px;
    height: 150px;
    text-align: center;
    font-family: 'Bellefair';
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.blackColor};
    background-color: ${({ theme }) => theme.pureWhiteColor};
    border-radius: 50%;

    ${device.bigMobile} {
        margin-top: 156px;
        width: 242px;
        height: 242px;
        font-size: 32px;
        line-height: 37px;
        letter-spacing: 2px;
    }

    ${device.smallDesktop} {
        margin-left: auto;
        margin-bottom: 0;
        width: 274px;
        height: 274px;
    }
`;
