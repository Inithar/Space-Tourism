import data from '../../data/data.json';

import { Header } from '../../components/header/Header';
import { Image, Wrapper } from './Destination.styles';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';
import { useMemo } from 'react';

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

  return (
    <Wrapper>
      <Header text="Pick your destination" number="01" />
      <Image src={data.destinations[destinationIndex].images.png} />
    </Wrapper>
  );
};
