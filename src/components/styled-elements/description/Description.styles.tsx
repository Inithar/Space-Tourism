import styled from 'styled-components';
import { device } from '../../../styles/responsive';

export const Description = styled.p`
    margin: 0;
    text-align: center;
    font-size: 15px;
    line-height: 25px;
    color: ${({ theme }) => theme.textColor};

    ${device.bigMobile} {
        font-size: 16px;
        line-height: 28px;
    }

    ${device.smallDesktop} {
        text-align: start;
        font-size: 18px;
        line-height: 32px;
    }
`;
