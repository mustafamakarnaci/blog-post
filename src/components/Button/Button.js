import React from 'react'
import { Button as ButtonComponent } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Button = ({ color, text, ...restProps }) => {
    return (
        <ButtonComponent variant={color} {...restProps} > {text} </ButtonComponent>
    )
}

export default Button
