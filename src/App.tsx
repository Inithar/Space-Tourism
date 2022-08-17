import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global.styles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      Test
    </ThemeProvider>
  );
}

export default App;
