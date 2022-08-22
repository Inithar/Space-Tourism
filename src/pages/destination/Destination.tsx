import { useMemo } from 'react';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';

import data from '../../data/data.json';

import { Header } from '../../components/header/Header';
import { Line } from '../../components/styled-elements/line/Line.styles';
import {
    Container,
    DataContainer,
    DestinationDescription,
    DestinationName,
    Image,
    Wrapper,
    DataNumbersContainer,
    DataBox,
    DataName,
    DataValue,
} from './Destination.styles';

export const Destination = () => {
    const destinationName = useCurrentLocation(2);

    const destinationIndex = useMemo(() => {
        switch (destinationName) {
            case 'moon':
                return 0;
            case 'mars':
                return 1;
            case 'europa':
                return 2;
            case 'titan':
                return 3;
            default:
                return 0;
        }
    }, [destinationName]);

    const { name, images, description, distance, travel } = data.destinations[destinationIndex];

    return (
        <Wrapper>
            <Header text="Pick your destination" number="01" />
            <Container>
                <Image src={images.png} />
                <DataContainer>
                    <DestinationName>{name}</DestinationName>
                    <DestinationDescription>{description}</DestinationDescription>
                    <Line />
                    <DataNumbersContainer>
                        <DataBox>
                            <DataName>Avg. Distance</DataName>
                            <DataValue>{distance}</DataValue>
                        </DataBox>
                        <DataBox>
                            <DataName>est. travel time</DataName>
                            <DataValue>{travel}</DataValue>
                        </DataBox>
                    </DataNumbersContainer>
                </DataContainer>
            </Container>
        </Wrapper>
    );
};
