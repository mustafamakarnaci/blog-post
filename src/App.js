import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './components/Posts/Posts';
import Container from './components/Container/Container';
import SessionContext from './contexts/SessionContext';
import { useState } from 'react';
import Content from './components/Content/Content';
import UserContext from './contexts/UserContext';
import ShowModalContext from './contexts/ShowModalContext';



function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState([]);
  const [isShow, setIsShow] = useState([]);
  return (
    <SessionContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      <UserContext.Provider value={{ user, setUser }}>
        <ShowModalContext.Provider value={{ isShow, setIsShow }}>
          <Container>
            <Header />
            <Content />
            <Footer />
          </Container>
        </ShowModalContext.Provider>
      </UserContext.Provider>
    </SessionContext.Provider>
  );
}

export default App;
