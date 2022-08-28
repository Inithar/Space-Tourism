import { useState } from 'react';
import { useGetDevice } from '../../hooks/useGetDevice';

import { NavigationLink } from '../styled-elements/navigationLink/NavigationLink.styles';
import {
    BurgerIcon,
    LinksContainer,
    LogoIcon,
    Wrapper,
    Number,
    Line,
    MobileLinksContainer,
    MobileLink,
    CloseIcon,
    MobileNavigation,
} from './Navigation.styles';

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const device = useGetDevice();
    const isDesktop = device === 'desktop' ? true : false;

    const toggleMobileNavigation = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Wrapper>
                <LogoIcon />
                {device === 'mobile' ? (
                    <BurgerIcon onClick={toggleMobileNavigation} />
                ) : (
                    <LinksContainer>
                        <NavigationLink to={'/'}>{isDesktop && <Number>00</Number>} Home</NavigationLink>
                        <NavigationLink to={'/destination'}>{isDesktop && <Number>01</Number>} Destination</NavigationLink>
                        <NavigationLink to={'/crew'}>{isDesktop && <Number>02</Number>} Crew</NavigationLink>
                        <NavigationLink to={'/technology'}>{isDesktop && <Number>03</Number>} Technology</NavigationLink>
                    </LinksContainer>
                )}
                {isDesktop && <Line />}
            </Wrapper>

            <MobileNavigation isOpen={isOpen}>
                <CloseIcon onClick={toggleMobileNavigation} />
                <MobileLinksContainer>
                    <MobileLink to={'/'} onClick={toggleMobileNavigation}>
                        <Number>00</Number> Home
                    </MobileLink>
                    <MobileLink to={'/destination'} onClick={toggleMobileNavigation}>
                        <Number>01</Number> Destination
                    </MobileLink>
                    <MobileLink to={'/crew'} onClick={toggleMobileNavigation}>
                        <Number>02</Number> Crew
                    </MobileLink>
                    <MobileLink to={'/technology'} onClick={toggleMobileNavigation}>
                        <Number>03</Number> Technology
                    </MobileLink>
                </MobileLinksContainer>
            </MobileNavigation>
        </>
    );
};
