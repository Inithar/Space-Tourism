import styled from 'styled-components';
import { device } from '../../styles/responsive';

interface WrapperProps {
    src: string;
}

export const Wrapper = styled.div<WrapperProps>`
    width: 100%;
    min-height: 100vh;
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
`;

export const PageContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1440px;

    ${device.smallDesktop} {
        padding-top: 40px;
    }
`;
