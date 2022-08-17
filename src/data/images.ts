export interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface HomeImages {
  background: Image;
}

export const homeImages: HomeImages = {
  background: {
    mobile: './images/home/background-home-mobile.jpg',
    tablet: './images/home/background-home-tablet.jpg',
    desktop: './images/home/background-home-desktop.jpg',
  },
};
