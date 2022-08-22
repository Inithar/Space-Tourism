import { useState } from 'react';
import { useGetDevice } from '../../hooks/useGetDevice';

import {
    BurgerIcon,
    Link,
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
                        <Link to={'/'}>{isDesktop && <Number>00</Number>} Home</Link>
                        <Link to={'/destination/moon'}>{isDesktop && <Number>01</Number>} Destination</Link>
                        <Link to={'/crew'}>{isDesktop && <Number>02</Number>} Crew</Link>
                        <Link to={'/technology'}>{isDesktop && <Number>03</Number>} Technology</Link>
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
                    <MobileLink to={'/destination/moon'} onClick={toggleMobileNavigation}>
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
