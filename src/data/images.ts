export interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface HomeImages {
  background: Image;
}

interface DestinationImages {
  background: Image;
}

export const homeImages: HomeImages = {
  background: {
    mobile: './images/home/background-home-mobile.jpg',
    tablet: './images/home/background-home-tablet.jpg',
    desktop: './images/home/background-home-desktop.jpg',
  },
};

export const destinationImages: DestinationImages = {
  background: {
    mobile: './images/destination/background-destination-mobile.jpg',
    tablet: './images/destination/background-destination-tablet.jpg',
    desktop: './images/destination/background-destination-desktop.jpg',
  },
};
