import React, { useMemo } from 'react';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';

import data from '../../data/data.json';

import { Header } from '../../components/header/Header';
import { Navigation } from './components/navigation/Navigation';
import { Name } from '../../components/styled-elements/name/Name.styles';
import { ContentContainer, DataContainer, Image, DataHeader, TerminologyDescription } from './Technology.styles';
import { useGetDevice } from '../../hooks/useGetDevice';

export const Technology = () => {
    const terminologyName = useCurrentLocation(2);
    const device = useGetDevice();

    const terminologyIndex = useMemo(() => {
        switch (terminologyName) {
            case 'launch_vehicle':
                return 0;
            case 'spaceport':
                return 1;
            case 'space_capsule':
                return 2;
            default:
                return 0;
        }
    }, [terminologyName]);

    const { name, images, description } = data.technology[terminologyIndex];

    return (
        <>
            <Header number="03" text="Space launch 101" />
            <ContentContainer>
                <Image src={device === 'desktop' ? images.portrait : images.landscape} />
                <Navigation />
                <DataContainer>
                    <DataHeader>The terminology</DataHeader>
                    <Name>{name}</Name>
                    <TerminologyDescription>{description}</TerminologyDescription>
                </DataContainer>
            </ContentContainer>
        </>
    );
};
