import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../App.css';

const Container = ({children}) => {

    
    return (
        <>
            <BrowserRouter className="home-background container-width">
                {children}
            </BrowserRouter>
        </>
    )
}

export default Container;
