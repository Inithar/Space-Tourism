import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global.styles';
import { theme } from './styles/theme';

import { MainLayout } from './layouts/main/MainLayout';
import { Crew } from './pages/crew/Crew';
import { Destination } from './pages/destination/Destination';
import { Home } from './pages/home/Home';
import { Technology } from './pages/technology/Technology';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="destination/:place" element={<Destination />} />
                    <Route path="crew/:member" element={<Crew />} />
                    <Route path="technology" element={<Technology />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
