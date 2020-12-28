import React, {FC } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorMessage from './ErrorMessage';



describe('ChangeFullName', () => {
    test('renders changefullname', () => {
        
        const {getByText } = render(<ErrorMessage error='ErrorMessage'/>);
        const errorMessage = getByText(/ErrorMessage/i);

        expect(errorMessage.tagName).toBe('DIV');
    });

   
});