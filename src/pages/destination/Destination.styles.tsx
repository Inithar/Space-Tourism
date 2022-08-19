import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Image = styled.img.attrs(({ src }) => {
  return {
    src,
  };
})`
  display: block;
  margin: 32px auto 0;
  width: 170px;
  height: 170px;
`;
