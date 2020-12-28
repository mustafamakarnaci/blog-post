import React from 'react'
import { Col, Nav, Navbar, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'

const Footer = () => {
    return (
        <>
            <Navbar fixed="bottom" className="border-top" collapseOnSelect expand="lg" bg="light" variant="light">
                <Row  className="flex-column footer-position m-0">
                    <Col className="d-flex flex-row m-0">

                        <Navbar.Brand href="#home">Blog Post</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="https://www.kodluyoruz.org/">Kodluyoruz </Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="https://github.com/mustafamakarnaci">Github </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col> 

                    <Col className="justify-content-center m-0">

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav size="sm" className="mx-auto">
                                <p className="footer-text">Copyright@ 2020</p>
                            </Nav>

                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Navbar>

        </>
    )
}

export default Footer
