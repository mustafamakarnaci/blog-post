import React  from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import {emailChecker, passwordChecker, fullnameChecker} from '../../utils/checkInputs'
describe('Login', () => {
    test('renders login', async () => {
        
        const {getByText } = render(<Login />);
        const loginPasswordLabel = getByText(/Enter Password/);
        const loginEmailLabel = getByText(/Enter Email/);
        expect(loginPasswordLabel).toBeInTheDocument();
        expect(loginEmailLabel).toBeInTheDocument();
    });

    test('check password validation', () => {
        const { container } = render (<Login/>);
        const inputElement = container.querySelector('input');
        expect(inputElement.value).toBe('');
        userEvent.type(inputElement,"a@abcaWW.22aaa.com");

        expect(passwordChecker(inputElement.value)).toBe("a@abcaWW.22aaa.com");
        
    });


    test('check email validation', () => {
        const { container } = render (<Login/>);
        const inputElement = container.querySelector('input');
        expect(inputElement.value).toBe('');
        userEvent.type(inputElement,'example@example.com');
        expect(emailChecker(inputElement.value)).toBe(true);
        
    });



});