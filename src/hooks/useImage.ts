import { Image } from '../data/images';
import { useGetDevice } from './useGetDevice';

export const useImage = (image: Image) => {
    const currentDevice = useGetDevice();

    if (currentDevice === null) throw new Error('Hook useGetDevice returns null value');

    return image[currentDevice];
};
