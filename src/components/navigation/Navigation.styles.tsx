import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { device } from '../../styles/responsive';
import logoIcon from '../../assets/shared/logo.svg';
import burgerIcon from '../../assets/shared/icon-hamburger.svg';
import closeIcon from '../../assets/shared/icon-close.svg';

interface MobileNavigationProps {
    isOpen: boolean;
}

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 24px;
    height: 96px;

    ${device.tablet} {
        padding-right: 0;
        padding-left: 39px;
    }

    ${device.smallDesktop} {
        padding-left: 55px;
    }
`;

export const LogoIcon = styled.img.attrs({
    src: logoIcon,
})`
    margin-right: auto;
    width: 40px;
    height: 40px;
`;

export const BurgerIcon = styled.img.attrs({
    src: burgerIcon,
})``;

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 48px;
    padding-right: 46px;
    width: 450px;
    height: 100%;
    background-color: ${({ theme }) => theme.navigationBackgroundColor};
    backdrop-filter: blur(81px);

    ${device.smallDesktop} {
        padding-left: 123px;
        padding-right: 165px;
        width: 830px;
    }
`;

export const Number = styled.span`
    margin-right: 14px;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    font-weight: 700;
    color: ${({ theme }) => theme.pureWhiteColor};
`;

export const Line = styled.div`
    position: absolute;
    top: 50%;
    right: 800px;
    left: 167px;
    transform: translateY(-50%);
    height: 1px;
    background-color: ${({ theme }) => theme.pureWhiteColor};
    opacity: 0.25;
`;

export const MobileNavigation = styled.div<MobileNavigationProps>`
    position: fixed;
    top: 0;
    right: 0;
    width: 254px;
    height: 100%;
    background-color: ${({ theme }) => theme.navigationBackgroundColor};
    backdrop-filter: blur(81px);
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(200%)')};
    transition: transform 0.3s;
    overflow: hidden;
`;

export const CloseIcon = styled.img.attrs({
    src: closeIcon,
})`
    display: block;
    margin-top: 34px;
    margin-left: auto;
    margin-right: 26px;
`;

export const MobileLinksContainer = styled.div`
    padding-top: 65px;
`;

export const MobileLink = styled(NavLink)`
    position: relative;
    display: flex;
    margin-left: 32px;
    margin-bottom: 32px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.pureWhiteColor};
    text-decoration: none;

    &[class*='active']::after {
        opacity: 1;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 4px;
        height: 100%;
        background-color: ${({ theme }) => theme.pureWhiteColor};
        opacity: 0;
    }
`;
