import React, { StrictMode, Suspense, FC } from 'react';
// eslint-disable-next-line import/no-unresolved
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import '@fontsource/inter';

import routes from './routes';
import { theme } from './theme';

import Loading from './components/Loading';
import './styles/main.scss';

const App: FC = () => {
    return (
        <StrictMode>
            <Router>
                <CssVarsProvider theme={theme}>
                    <CssBaseline />
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            {Object.entries(routes).map(([path, props]) => (
                                <Route key={path} path={path} {...props} />
                            ))}
                        </Routes>
                    </Suspense>
                </CssVarsProvider>
            </Router>
        </StrictMode>
    );
};

const rootEl = document.getElementById('root');
if (rootEl) {
    createRoot(rootEl).render(<App />);
}

export default App;
