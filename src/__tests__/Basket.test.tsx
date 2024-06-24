import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { Basket } from '../components';

describe('Basket Component', () => {
    test('should render without crashing', () => {
        const { container } = render(
            <MemoryRouter>
                <Basket currentAmount={5} />
            </MemoryRouter>
        );
        expect(container).toBeInTheDocument();
    });

    test('should have the correct link path', () => {
        const { getByRole } = render(
            <MemoryRouter>
                <Basket currentAmount={5} />
            </MemoryRouter>
        );
        expect(getByRole('link')).toHaveAttribute('href', '/order');
    });

    test('should render the image correctly', () => {
        const { getByAltText } = render(
            <MemoryRouter>
                <Basket currentAmount={5} />
            </MemoryRouter>
        );
        expect(getByAltText('purchases')).toBeInTheDocument();
    });

    test('should display the correct amount when currentAmount is provided', () => {
        const { getByText } = render(
            <MemoryRouter>
                <Basket currentAmount={5} />
            </MemoryRouter>
        );
        expect(getByText('5')).toBeInTheDocument();
    });

    test('should display "0" when currentAmount is not provided', () => {
        const { getByText } = render(
            <MemoryRouter>
                <Basket currentAmount={0} />
            </MemoryRouter>
        );
        expect(getByText('0')).toBeInTheDocument();
    });
});
