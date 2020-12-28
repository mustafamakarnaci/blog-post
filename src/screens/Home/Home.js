import React, { useEffect, useState } from 'react'
import { Carousel, Container, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { useContext } from 'react';
import ShowModalContext from '../../contexts/ShowModalContext';
import '../../login.css';
const Home = () => {

    const { isShow } = useContext(ShowModalContext);
    const [show, setShow] = useState(false);
    const handleShowModal = () => {
        if (isShow.login || isShow.signup) {
            console.log(isShow.login)
            return setShow(true);
        }
        else {
            return setShow(false);
        }
    }
    useEffect(() => {
        handleShowModal();
        
    }, [isShow]);


    return (
        <Container className="mt-5">
       <div className="cover-whole"></div>
            {(isShow.login || isShow.signup) && 
                <Modal
                    className="modal-style"
                    size="lg"
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                <Modal.Body className="modal-style">
                        {isShow.login && <Login />}
                        {isShow.signup && <SignUp/>}
                        </Modal.Body>
                </Modal>
            }
            <Carousel>
                <Carousel.Item >
                    <img
                        className="d-block w-100 slider-home slider-radius"
                        src="http://lorempixel.com/640/480/nature" height="250"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-home slider-radius" 
                        src="http://lorempixel.com/640/480/animals" height="250"
                        alt="second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-home slider-radius"
                        src="http://lorempixel.com/640/200/people" height="250"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Home
