import React from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostsScreen from '../PostsScreen/PostsScreen';


const Dashboard = () => {
    return (
        <Container>
            <PostsScreen/>
        </Container>
    )
}

export default Dashboard
