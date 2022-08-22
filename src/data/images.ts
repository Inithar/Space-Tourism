export interface Image {
    mobile: string;
    tablet: string;
    desktop: string;
}

interface Images {
    background: Image;
}

export const homeImages: Images = {
    background: {
        mobile: '../images/home/background-home-mobile.jpg',
        tablet: '../images/home/background-home-tablet.jpg',
        desktop: '../images/home/background-home-desktop.jpg',
    },
};

export const destinationImages: Images = {
    background: {
        mobile: '../images/destination/background-destination-mobile.jpg',
        tablet: '../images/destination/background-destination-tablet.jpg',
        desktop: '../images/destination/background-destination-desktop.jpg',
    },
};

export const crewImages: Images = {
    background: {
        mobile: '../images/crew/background-crew-mobile.jpg',
        tablet: '../images/crew/background-crew-tablet.jpg',
        desktop: '../images/crew/background-crew-desktop.jpg',
    },
};
