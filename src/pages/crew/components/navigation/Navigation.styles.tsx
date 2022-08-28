import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../../../styles/responsive';

export const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 32px;

    ${device.bigMobile} {
        order: 2;
        margin-top: 40px;
    }

    ${device.smallDesktop} {
        align-self: flex-start;
    }

    ${device.desktop} {
        margin-top: 120px;
    }
`;

export const Link = styled(NavLink)`
    margin-right: 16px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.pureWhiteColor};
    opacity: 0.17;
    cursor: pointer;

    &:last-child {
        margin-right: 0;
    }

    &[class*='active'] {
        opacity: 1;
    }

    ${device.smallDesktop} {
        margin-right: 24px;
        height: 15px;
        width: 15px;
    }
`;
