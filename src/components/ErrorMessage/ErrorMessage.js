import React, {useState} from 'react'
import { Alert, Button, Container, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const ErrorMessage = ({error}) => {

    
    return (

        <Alert variant="danger" >
           
                {error}
            
        </Alert>
    )
}

export default ErrorMessage;
