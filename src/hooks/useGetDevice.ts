import { useEffect, useState } from 'react';

type devices = 'mobile' | 'tablet' | 'desktop';

export const useGetDevice = () => {
    const [device, setDevice] = useState<devices>('desktop');

    useEffect(() => {
        const setCurrentDevice = () => {
            const currentWidth = window.innerWidth;

            if (currentWidth < 768) setDevice('mobile');
            if (currentWidth >= 768 && currentWidth < 1200) setDevice('tablet');
            if (currentWidth >= 1200) setDevice('desktop');
        };

        setCurrentDevice();

        window.addEventListener('resize', setCurrentDevice);

        return () => window.removeEventListener('resize', setCurrentDevice);
    }, []);

    return device;
};
