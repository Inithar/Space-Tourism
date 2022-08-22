import { useLocation } from 'react-router-dom';

export const useCurrentLocation = (nestingLevel: number) => {
    const { pathname } = useLocation();

    return pathname.split('/')[nestingLevel];
};
