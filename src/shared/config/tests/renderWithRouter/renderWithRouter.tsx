import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nFortests from 'shared/config/i18n/i18nFortests';


export interface renderWithRouterOptions {
    route: string
}

export function renderWithTranslation(component: ReactNode, options: renderWithRouterOptions) {
    const {
        route
    } = options
    return render(
        <MemoryRouter initialEntries={[]}>
            <I18nextProvider i18n={i18nFortests}>
                {component}
            </I18nextProvider>,
        </MemoryRouter>
    );
}
