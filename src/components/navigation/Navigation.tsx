// import React, { useState } from 'react';
import { useGetDevice } from '../../hooks/useGetDevice';
import { BurgerIcon, Link, LinksContainer, LogoIcon, Wrapper, Number, Line } from './Navigation.styles';

export const Navigation = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const device = useGetDevice();
  const isDesktop = device === 'desktop' ? true : false;

  return (
    <Wrapper>
      <LogoIcon />
      {device === 'mobile' ? (
        <BurgerIcon />
      ) : (
        <LinksContainer>
          <Link to={'/'}>{isDesktop && <Number>00</Number>} Home</Link>
          <Link to={'/destination'}>{isDesktop && <Number>01</Number>} Destination</Link>
          <Link to={'/crew'}>{isDesktop && <Number>02</Number>} Crew</Link>
          <Link to={'/technology'}>{isDesktop && <Number>03</Number>} Technology</Link>
        </LinksContainer>
      )}
      {isDesktop && <Line />}
    </Wrapper>
  );
};
