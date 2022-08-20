import styled from 'styled-components';
import { device } from '../../styles/responsive';

export const Wrapper = styled.div`
  padding: 0 24px 58px;

  ${device.bigMobile} {
    padding: 0 48px 62px;
  }

  ${device.tablet} {
    padding: 0 98px 62px;
  }

  ${device.desktop} {
    padding: 0 166px 118px;
  }
`;

export const Image = styled.img.attrs(({ src }) => {
  return {
    src,
  };
})`
  display: block;
  margin: 32px auto 0;
  width: 170px;
  height: 170px;

  ${device.bigMobile} {
    margin-top: 60px;
    width: 300px;
    height: 300px;
  }

  ${device.smallDesktop} {
    width: 445px;
    height: 445px;
  }
`;

export const Container = styled.div`
  ${device.smallDesktop} {
    display: flex;
    margin-top: 64px;
  }
`;

export const DataContainer = styled.div`
  ${device.tablet} {
    margin: 0 auto;
    max-width: 573px;
  }

  ${device.smallDesktop} {
    max-width: 445px;
  }

  ${device.desktop} {
    margin: 0 0 0 157px;
  }
`;

export const DestinationName = styled.p`
  margin: 20px 0 0 0;
  text-align: center;
  font-family: 'Bellefair';
  font-size: 56px;
  line-height: 64px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.pureWhiteColor};

  ${device.bigMobile} {
    margin-top: 32px;
    font-size: 80px;
    line-height: 92px;
  }

  ${device.smallDesktop} {
    margin-top: 37px;
    text-align: start;
    font-size: 100px;
    line-height: 115px;
  }
`;

export const DestinationDescription = styled.p`
  margin: 0;
  text-align: center;
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.textColor};

  ${device.bigMobile} {
    margin-top: 8px;
    font-size: 16px;
    line-height: 28px;
  }

  ${device.smallDesktop} {
    margin-top: 14px;
    text-align: start;
    font-size: 18px;
    line-height: 32px;
  }
`;

export const Line = styled.div`
  margin-top: 32px;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.lightBlackColor};

  ${device.bigMobile} {
    margin-top: 49px;
  }

  ${device.smallDesktop} {
    margin-top: 54px;
  }
`;

export const DataNumbersContainer = styled.div`
  ${device.bigMobile} {
    display: flex;
    justify-content: center;
  }

  ${device.smallDesktop} {
    justify-content: start;
  }
`;

export const DataBox = styled.div`
  margin-top: 32px;

  ${device.bigMobile} {
    margin-top: 28px;
  }

  ${device.smallDesktop} {
    &:nth-child(1) {
      margin-right: 79px;
    }
  }
`;

export const DataName = styled.p`
  margin: 0 0 12px 0;
  text-align: center;
  font-family: 'Barlow Condensed';
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2.36px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textColor};

  ${device.bigMobile} {
    min-width: 216px;
  }

  ${device.smallDesktop} {
    text-align: start;
    min-width: 143px;
  }
`;

export const DataValue = styled.p`
  margin: 0;
  text-align: center;
  font-family: 'Bellefair';
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.pureWhiteColor};

  ${device.smallDesktop} {
    text-align: start;
  }
`;
