import styled from 'styled-components';
import { Description } from '../../components/styled-elements/description/Description.styles';
import { device } from '../../styles/responsive';

export const ContentContainer = styled.div`
    ${device.smallDesktop} {
        display: flex;
    }
`;

export const Image = styled.img.attrs(({ src }) => ({
    src,
}))`
    margin-top: 32px;
    width: 101%;
    height: 170px;

    ${device.bigMobile} {
        margin-top: 60px;
        height: 310px;
    }

    ${device.smallDesktop} {
        order: 3;
        margin-top: 26px;
        margin-bottom: 101px;
        width: 420px;
        height: 527px;
    }

    ${device.desktop} {
        width: 515px;
    }
`;

export const DataContainer = styled.div`
    padding: 0 24px 81px;

    ${device.bigMobile} {
        margin: 0 auto;
        padding: 0 0 97px;
        max-width: 458px;
    }

    ${device.smallDesktop} {
        margin: 137px 80px 0;
        max-width: 470px;
    }

    ${device.desktop} {
        margin-right: 130px;
    }
`;

export const DataHeader = styled.p`
    margin-top: 26px;
    margin-bottom: 9px;
    text-align: center;
    font-family: 'Barlow Condensed';
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.35px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.textColor};

    ${device.bigMobile} {
        margin-top: 44px;
        margin-bottom: 16px;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
    }

    ${device.smallDesktop} {
        margin-top: 0;
        text-align: start;
    }
`;

export const TerminologyDescription = styled(Description)`
    margin-top: 16px;
`;
