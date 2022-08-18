import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { device } from '../../styles/responsive';
import logoIcon from '../../assets/shared/logo.svg';
import burgerIcon from '../../assets/shared/icon-hamburger.svg';

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

export const Link = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 37px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2.36px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.pureWhiteColor};
  text-decoration: none;

  ${device.smallDesktop} {
    margin-right: 48px;
  }

  &:hover::before {
    opacity: 0.5;
  }

  &[class*='active']::before {
    opacity: 1;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -35px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.pureWhiteColor};
    opacity: 0;
    transition: opacity 1s;
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
