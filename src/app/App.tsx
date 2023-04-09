import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider/themeProvider';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './provider/router';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
