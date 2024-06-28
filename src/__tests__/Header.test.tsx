import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from '../components';
import '@testing-library/jest-dom/extend-expect';
import {btnName} from "../constants/constants";


const mockState = {
    addDataToBasket: {
        meal1: { inputValue: '2' },
        meal2: { inputValue: '3' }
    }
};

const mockReducer = (state = mockState) => state;
const store = createStore(mockReducer);

describe('Header Component', () => {
    test('should render without crashing', () => {
        const { container } = render(
            <Provider store={store}>
                <Header />
            </Provider>
        );
        expect(container).toBeInTheDocument();
    });

    test('should render the preview image', () => {
        const { getByAltText } = render(
            <Provider store={store}>
                <Header />
            </Provider>
        );
        expect(getByAltText('preview')).toBeInTheDocument();
    });

    test('should render HeaderButtons and handle click', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Header />
            </Provider>
        );

        Object.keys(btnName).forEach((key) => {
            // @ts-ignore
            const button = getByText(btnName[key]);
            expect(button).toBeInTheDocument();
            fireEvent.click(button);
            expect(button).toHaveClass('active');
        });
    });

    test('should render HeaderThemeSwitcher', () => {
        const { container } = render(
            <Provider store={store}>
                <Header />
            </Provider>
        );
        expect(container.querySelector('.header-theme-switcher')).toBeInTheDocument();
    });

    test('should render Basket with correct currentAmount', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Header />
            </Provider>
        );
        expect(getByText('5')).toBeInTheDocument();
    });
});
