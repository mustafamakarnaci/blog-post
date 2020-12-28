import React  from 'react';
import { render } from '@testing-library/react';
import ChangePassword from './ChangePassword';
import userEvent from '@testing-library/user-event';

describe('ChangePassword', () => {
    test('renders ChangePassword', () => {
        
        const {getByText } = render(<ChangePassword />);
        const ChangePasswordLabel = getByText(/Enter New Password/i);
        expect(ChangePasswordLabel).toBeInTheDocument();
    });

    test('gets value', () => {
        const { container } = render (<ChangePassword/>);
        const inputElement = container.querySelector('input');
        expect(inputElement.value).toBe('');
        userEvent.type(inputElement,'examplePassWord');
        expect(inputElement.value).toBe('examplePassWord');

    });



});