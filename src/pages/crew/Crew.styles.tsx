import styled from 'styled-components';
import { Description } from '../../components/styled-elements/description/Description.styles';
import { Line as BasicLine } from '../../components/styled-elements/line/Line.styles';
import { device } from '../../styles/responsive';

export const Wrapper = styled.div`
    padding: 0 24px 104px;

    ${device.bigMobile} {
        padding-bottom: 0;
    }

    ${device.smallDesktop} {
        padding: 0 98px 0;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    ${device.smallDesktop} {
        margin-top: 44px;
        flex-direction: row;
    }
`;

export const Image = styled.img.attrs(({ src }) => ({
    src,
}))`
    display: block;
    margin: 32px auto 0;
    width: 177px;
    height: 222px;

    ${device.bigMobile} {
        order: 2;
        margin-top: 40px;
        width: 450px;
        height: 572px;
    }

    ${device.smallDesktop} {
        margin: 0 0 0 auto;
    }

    ${device.desktop} {
        width: 568px;
        height: 734px;
    }
`;

export const Line = styled(BasicLine)`
    margin-top: 0;

    ${device.bigMobile} {
        display: none;
    }
`;

export const Container = styled.div`
    ${device.bigMobile} {
        display: flex;
        flex-direction: column;
        order: 1;
        margin: 0 auto;
        max-width: 458px;
    }

    ${device.smallDesktop} {
        margin: 154px 0 0;
        max-width: 614px;
    }
`;

export const DataContainer = styled.div``;

export const Role = styled.p`
    margin: 32px 0 8px;
    text-align: center;
    font-family: 'Bellefair';
    font-size: 16px;
    line-height: 18px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.pureWhiteColor};
    opacity: 0.5;

    ${device.bigMobile} {
        margin-top: 60px;
        font-size: 24px;
        line-height: 28px;
    }

    ${device.smallDesktop} {
        text-align: start;
        font-size: 32px;
        line-height: 37px;
    }
`;

export const MemberDescription = styled(Description)`
    margin-top: 16px;

    ${device.bigMobile} {
        min-height: 112px;
    }

    ${device.smallDesktop} {
        max-width: 444px;
        min-height: 160px;
    }
`;
