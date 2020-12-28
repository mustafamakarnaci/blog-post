import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../config/Router';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import SessionContext from '../../contexts/SessionContext';
import ShowModalContext from '../../contexts/ShowModalContext';
import { useState } from 'react';
import { useEffect } from 'react';


const Header = () => {

  const { isAuthenticated } = useContext(SessionContext);
  const { setIsShow } = useContext(ShowModalContext);
  const { isShow } = useContext(ShowModalContext);
  const [show, setShow] = useState([]);

  const handleClick = (title) => {

    if (title === 'Login' || title === 'login') {
      console.log(title);
      setShow({
        login: true,
        signup: false,
      });
      console.log(show);
    } else {
      console.log(title);
      setShow({
        login: false,
        signup: true,
      });
    }

  }

  useEffect(() => {
    setIsShow(show);
    console.log(show);
  }, [show])

  return (

    <Navbar bg="light" className="shadow" expand="lg" variant="light">
      <Navbar.Brand href="/"> Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-between" id="basic-navbar-nav">
        <Nav>
          {routes.filter((route) => route.isLink == true && isAuthenticated == true && route.isPrivate == true)
            .map((route) => (

              <li className="nav-item">
                <Link className="text-decoration-none nav-link" to={route.path}>
                  {route.title}
                </Link>
              </li>

            ))}
        </Nav>
        <Nav>

          {routes.filter((route) => route.isLink == true && isAuthenticated == false && route.isPrivate == false).map((route) => (


            <li className="nav-item">
              <Link className="text-decoration-none nav-link" onClick={() => handleClick(route.title)} >
                {route.title}
              </Link>
            </li>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
};

export default Header;
