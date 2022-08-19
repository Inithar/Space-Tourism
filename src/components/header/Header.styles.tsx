import styled from 'styled-components';

export const Text = styled.h1`
  margin: 0;
  text-align: center;
  font-family: 'Barlow Condensed';
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  font-weight: 400;
  color: ${({ theme }) => theme.pureWhiteColor};
`;

export const Number = styled.span`
  margin-right: 18px;
  font-weight: 700;
  opacity: 0.25;
`;
