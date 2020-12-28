import React, { useContext, useState } from 'react'
import ShowModalContext from '../../contexts/ShowModalContext';
import UserContext from '../../contexts/UserContext';
import { Form, Col, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';
import SessionContext from '../../contexts/SessionContext';
import { createNewUser, getUsers } from '../../services/api';

import '../../SignUp.css';
import { emailChecker, fullnameChecker, passwordChecker } from '../../utils/checkInputs';

const SignUp = () => {
    const history = useHistory();
    const { setIsShow } = useContext(ShowModalContext);
    const { setUser } = useContext(UserContext);
    const { setAuthenticaed } = useContext(SessionContext);
    const [users, setUsers] = useState([]);
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [userRegister, setUserRegister] = useState({

        fullname: '',
        username: '',
        password: '',
        email: '',
        adress: '',
    });

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            console.log('hata');
            event.preventDefault();
            event.stopPropagation();
        }
        event.preventDefault();
        setValidated(true);
        console.log('handlesubmit');
        isUserExist() ? setError('Username or email already exist!') : handleUserRegister();
    };

    const isUserExist = async () => {
        try {
            const { data } = await getUsers();
            setUsers(data);
        } catch (err) {
            setError(err);
        }
        return users.some((user) => userRegister.fullname === user.username || user.username === userRegister.email);
    }

    const handleUserRegister = async () => {
        try {
            console.log(userRegister);
            setLoading(true);
            const { data } = await createNewUser(userRegister);
            setUser(data)
            setAuthenticaed(true);
            history.push('/dashboard');
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }

    if (loading) {
        return <Loader className="m-auto"/>
    }


    return (

        <Card className="card-signup flex-row">
            <div className="card-img-left d-flex d-none">
            </div>
            <Card.Body className="card-body">
                <Card.Title className="card-title text-center pb-4">
                    Sign Up
                            </Card.Title>
                <Form
                    className="form-signup"
                    noValidate validated={validated} onSubmit={handleSubmit}>

                    <Form.Row>
                        <Form.Group as={Col} className="form-label-group" controlId="validationCustom01">

                            <Form.Control
                                className="form-input"
                                required
                                type="text"
                                placeholder="Fullname"
                                onChange={(event) => fullnameChecker(event.target.value) === null ? setError("You shouldn't enter speacial character and number to creata a fullname") : setUserRegister({
                                    ...userRegister,
                                    fullname: event.target.value,
                                })}
                            />
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} className="form-label-group" controlId="validationCustomUsername">

                            <Form.Control
                                className="form-input"
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                required
                                onChange={(event) => setUserRegister({
                                    ...userRegister,
                                    username: event.target.value,
                                })}
                            />
                            <Form.Label>Username</Form.Label>
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} className="form-label-group" controlId="validationCustom04">

                            <Form.Control
                                className="form-input"
                                type="password" placeholder="Password" required
                                onChange={(event) => passwordChecker(event.target.value) === null ?
                                    setError('It must contain at least one a special character, lowercase, uppercase and number.') :
                                    setUserRegister({
                                        ...userRegister,
                                        password: event.target.value,
                                    })}
                            />
                            <Form.Label>Password</Form.Label>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid password.
          </Form.Control.Feedback>
                        </Form.Group>


                        <Form.Group as={Col} className="form-label-group" controlId="validationCustom05">

                            <Form.Control
                                className="form-input"
                                type="email" placeholder="Email" required
                                onChange={(event) => !emailChecker(event.target.value)
                                    ? setError('example@example.com')
                                    : setUserRegister({
                                        ...userRegister,
                                        email: event.target.value,
                                    })}
                            />
                            <Form.Label>Email</Form.Label>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
          </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>


                    <Form.Group className="form-label-group" controlId="validationCustom03">

                        <Form.Control
                            className="form-input"
                            type="text" placeholder="Address" required
                            onChange={(event) => setUserRegister({
                                ...userRegister,
                                adress: event.target.value,
                            })}
                        />
                        <Form.Label>Address</Form.Label>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid address.
          </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group className="form-label-group" >
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                        />
                    </Form.Group>
                    <Button className="form-btn btn-block my-3" variant="dark" type="submit" text="Sign Up" />
                    <Form.Row>
                        <Card.Text className="mx-auto">Already have an account? <a className="text-decoration-none p-0 pl-1 m-0 d-inline-block nav-link" onClick={() => setIsShow({
                            login: true,
                            signup: false,
                        })} >Login</a> </Card.Text>
                    </Form.Row>
                </Form>
            </Card.Body>
        </Card>


    );
};

export default SignUp;

