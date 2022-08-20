import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    navigationBackgroundColor: string;
    textColor: string;
    blackColor: string;
    lightBlackColor: string;
    pureWhiteColor: string;
  }
}

export const theme: DefaultTheme = {
  navigationBackgroundColor: 'rgba(255, 255, 255, 0.04)',
  textColor: 'rgba(208, 214, 249,1)',
  blackColor: 'rgba(11, 13, 23, 1)',
  lightBlackColor: 'rgba(56, 59, 75, 1)',
  pureWhiteColor: 'rgb(255,255,255,1)',
};
