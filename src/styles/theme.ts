import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        navigationBackgroundColor: string;
        textColor: string;
        blackColor: string;
        lightBlackColor: string;
        pureWhiteColor: string;
        glassColor: string;
    }
}

export const theme: DefaultTheme = {
    navigationBackgroundColor: 'rgba(255, 255, 255, 0.04)',
    textColor: 'rgba(208, 214, 249,1)',
    blackColor: 'rgba(11, 13, 23, 1)',
    lightBlackColor: 'rgba(56, 59, 75, 1)',
    pureWhiteColor: 'rgba(255,255,255,1)',
    glassColor: 'rgba(255,255,255,.1)',
};
