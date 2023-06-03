import { render } from 'react-dom';
import { ThemeProvider } from 'app/provider/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/provider/ErrorBondary';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import App from './app/App';

import 'shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
