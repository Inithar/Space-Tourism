import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    blackColor: string;
    pureWhiteColor: string;
  }
}

export const theme: DefaultTheme = {
  textColor: 'rgba(208, 214, 249,1)',
  blackColor: 'rgba(11, 13, 23, 1)',
  pureWhiteColor: 'rgba(255,255,255,1)',
};
