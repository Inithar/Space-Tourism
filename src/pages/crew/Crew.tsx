import React, { useMemo } from 'react';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';

import data from '../../data/data.json';

import { Header } from '../../components/header/Header';
import { Name } from '../../components/styled-elements/name/Name.styles';
import { Container, ContentContainer, DataContainer, Image, Line, MemberDescription, Role, Wrapper } from './Crew.styles';

export const Crew = () => {
    const crewMemberName = useCurrentLocation(2);

    const crewMemberIndex = useMemo(() => {
        switch (crewMemberName) {
            case 'Douglas_Hurley':
                return 0;
            case 'Mark_Shuttleworth':
                return 1;
            case 'Victor_Glover':
                return 2;
            case 'Anousheh_Ansari':
                return 3;
            default:
                return 0;
        }
    }, [crewMemberName]);

    const { bio, images, name, role } = data.crew[crewMemberIndex];

    return (
        <Wrapper>
            <Header number="02" text="Meet your crew" />
            <ContentContainer>
                <Image src={images.png} />
                <Line />
                <Container>
                    <DataContainer>
                        <Role>{role}</Role>
                        <Name>{name}</Name>
                        <MemberDescription>{bio}</MemberDescription>
                    </DataContainer>
                </Container>
            </ContentContainer>
        </Wrapper>
    );
};
