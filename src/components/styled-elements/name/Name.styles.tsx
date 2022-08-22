import styled from 'styled-components';
import { device } from '../../../styles/responsive';

export const Name = styled.p`
    margin: 0;
    text-align: center;
    font-family: 'Bellefair';
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.pureWhiteColor};

    ${device.bigMobile} {
        font-size: 40px;
        line-height: 46px;
    }

    ${device.smallDesktop} {
        text-align: start;
        font-size: 56px;
        line-height: 64px;
    }
`;
