import React  from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUp from './SignUp';
import { fullnameChecker } from '../../utils/checkInputs';

describe('SignUp', () => {
    test('renders SignUp', () => {
        
        const {getByText } = render(<SignUp />);
        const SignUpLabelFullname = getByText(/Full Name/);
        const SignUpLabelUsername = getByText(/Username/);
        const SignUpLabelPassword = getByText(/Password/);
        const SignUpLabelEmail = getByText(/Email/);
        const SignUpLabelAddress = getByText(/Address/);

        expect(SignUpLabelFullname).toBeInTheDocument();
        expect(SignUpLabelUsername).toBeInTheDocument();
        expect(SignUpLabelPassword).toBeInTheDocument();
        expect(SignUpLabelEmail).toBeInTheDocument();
        expect(SignUpLabelAddress).toBeInTheDocument();

    });

     test('check fullname validation', () => {
        const { container } = render (<SignUp/>);
        const inputElement = container.querySelector('input');
        expect(inputElement.value).toBe('');
        userEvent.type(inputElement,'John Doe');
        expect(fullnameChecker(inputElement.value).toString()).toBe("John Doe");
        
    }); 
});