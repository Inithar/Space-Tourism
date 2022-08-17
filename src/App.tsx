import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Crew } from './pages/crew/Crew';
import { Destination } from './pages/destination/Destination';
import { Home } from './pages/home/Home';
import { Technology } from './pages/technology/Technology';
import GlobalStyle from './styles/global.styles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
