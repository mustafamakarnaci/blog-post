import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SessionContext from '../../contexts/SessionContext';
import { getUsers } from '../../services/api';
import UserContext from '../../contexts/UserContext';
import '../../login.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import ShowModalContext from '../../contexts/ShowModalContext';


const Login = () => {

  const { setAuthenticated } = useContext(SessionContext);
  const { setUser } = useContext(UserContext);
  const { setIsShow } = useContext(ShowModalContext);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    const init = async () => {
      
       return await getUsers();
     
    }
    const { data } = init();
    setUsers(data);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    //FIND USER
    const userTemp = (users.find(user =>
      email === user.email && password === user.password
    ))
    
    //IS USER EXIST
    const userIsExist = (users.find(user =>
      email === user.email))
    
    if (userIsExist) {
      setUser(userTemp);

      //CHECK USER EMAIL AND PASSWORD
      if (email === userTemp?.email && password === userTemp?.password) {
        
        setAuthenticated(true);
        setUser(userTemp);
        history.push('/dashboard');
      } else {
        setError('Wrong username or password');
      }
    } else {
      setError('User not found');
    }

  };


  return (

    <Card className="card-login flex-row">
      <div className="card-img-left d-flex d-none">

      </div>
      <Card.Body className="card-body">
        <Card.Title className="card-title text-center pb-4">
          Login
            </Card.Title>

        <Form className="form-login" onSubmit={handleSubmit}>

          <Form.Group className="form-label-group" controlId="formBasicEmail">

            <Form.Control className="form-input" type="email" placeholder="Enter email" required
              autoComplete="on" value={email} name="username"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              autoFocus
            />
            <Form.Label>Enter Email</Form.Label>
          </Form.Group>


          <Form.Group className="form-label-group" controlId="formBasicPassword">

            <Form.Control type="password" placeholder="Enter Password" required
              value={password} name="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <Form.Label>Enter Password</Form.Label>
          </Form.Group>

          <Button className="form-btn btn-block my-3" variant="dark" type="submit" text="Login" />
          <Form.Row>
            <Card.Text className="mx-auto">Don't have an account? <a className="text-decoration-none p-0 pl-1 m-0 d-inline-block nav-link" onClick={() => setIsShow({
              login: false,
              signup: true,
            })} >Sign Up</a> </Card.Text>
          </Form.Row>
        </Form>
        {error && <ErrorMessage error={error} />}
      </Card.Body>
    </Card>

  );
};

export default Login;


