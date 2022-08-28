import styled from 'styled-components';
import { NavigationLink } from '../../../../components/styled-elements/navigationLink/NavigationLink.styles';
import { device } from '../../../../styles/responsive';

export const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 26px;
    height: 28px;

    ${device.bigMobile} {
        margin-top: 53px;
    }

    ${device.smallDesktop} {
        justify-content: start;
        margin-top: 0;
    }
`;

export const Link = styled(NavigationLink)`
    margin-right: 26px;

    &::before {
        bottom: -8px;
    }

    ${device.bigMobile} {
        &::before {
            bottom: -12px;
        }
    }
`;
