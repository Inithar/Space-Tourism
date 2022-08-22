import { useEffect, useState } from 'react';
import { useImage } from '../../hooks/useImage';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';

import { Outlet } from 'react-router-dom';

import { homeImages, destinationImages, crewImages } from '../../data/images';

import { Navigation } from '../../components/navigation/Navigation';
import { PageContainer, Wrapper } from './MainLayout.styles';

export const MainLayout = () => {
    const pathname = useCurrentLocation(1);
    const [backgroundImage, setBackgroundImage] = useState(homeImages.background);

    useEffect(() => {
        switch (`/${pathname}`) {
            case '/':
                setBackgroundImage(homeImages.background);
                break;
            case '/destination':
                setBackgroundImage(destinationImages.background);
                break;
            case '/crew':
                setBackgroundImage(crewImages.background);
                break;
        }
    }, [pathname]);

    return (
        <Wrapper src={useImage(backgroundImage)}>
            <PageContainer>
                <Navigation />
                <Outlet />
            </PageContainer>
        </Wrapper>
    );
};
