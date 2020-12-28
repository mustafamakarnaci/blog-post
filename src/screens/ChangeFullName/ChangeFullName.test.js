import React, {FC } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChangeFullName from './ChangeFullName';


describe('ChangeFullName', () => {
    test('renders changefullname', () => {
        
        const {getByText } = render(<ChangeFullName />);
        const changeFullnameLabel = getByText(/Enter New Fullname/i);

        expect(changeFullnameLabel).toBeInTheDocument();
    });

    test('gets value', () => {
        const { container } = render (<ChangeFullName/>);
        const inputElement = container.querySelector('input');
        expect(inputElement.value).toBe('');
        userEvent.type(inputElement,'example');
        expect(inputElement.value).toBe('example');

    });
});