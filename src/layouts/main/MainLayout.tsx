import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useImage } from '../../hooks/useImage';

import { homeImages, destinationImages } from '../../data/images';

import { Navigation } from '../../components/navigation/Navigation';
import { PageContainer, Wrapper } from './MainLayout.styles';

export const MainLayout = () => {
  const { pathname } = useLocation();
  const [backgroundImage, setBackgroundImage] = useState(homeImages.background);

  useEffect(() => {
    switch (pathname) {
      case '/':
        setBackgroundImage(homeImages.background);
        break;
      case '/destination':
        setBackgroundImage(destinationImages.background);
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
