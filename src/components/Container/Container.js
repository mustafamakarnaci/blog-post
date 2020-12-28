import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostsScreen from '../../screens/PostsScreen/PostsScreen';
import Posts from '../Posts/Posts';
import { Children } from 'react';
import '../../App.css'
import SessionContext from '../../contexts/SessionContext';
const Container = ({children}) => {
    const {isAuthenticed} = useContext(SessionContext);
    return (
        <>
            <BrowserRouter className={isAuthenticed ?  "dashboard-bg container-width" :"home-background container-width"} >
                {children}
            </BrowserRouter>
        </>
    )
}

export default Container;
