import styled from 'styled-components';
import { device } from '../../../styles/responsive';

export const Line = styled.div`
    margin-top: 32px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.lightBlackColor};

    ${device.bigMobile} {
        margin-top: 49px;
    }

    ${device.smallDesktop} {
        margin-top: 54px;
    }
`;
