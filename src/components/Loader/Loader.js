import React from 'react'
import { Button, Container, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Loader = () => {
    return (
        <Container className="mx-auto my-auto">

            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </Container>
    )
}

export default Loader;
