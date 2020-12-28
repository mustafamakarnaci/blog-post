import React, { useContext, useEffect, useState } from 'react'
import '../../ChangeSettings.css';
import { Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../../components/Button/Button';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import UserContext from '../../contexts/UserContext';

const ChangePassword = ({ onChangePassword }) => {

    const { user } = useContext(UserContext);
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [error, setError] = useState('');

    const checkPassword = (e) => {
        e.preventDefault();
        if (password === passwordAgain) {
           return onChangePassword(password);
        } else {
            setError('Must be same');
        }
    }

    return (

        <Card className="card-setting flex-row">
            <Card.Body className="card-body">
                <Card.Title className="card-title text-center pb-4">
                    Change Password
                    {console.log(password)}
                </Card.Title>

                <Form className="form-setting" onSubmit={checkPassword}>

                    <Form.Group className="form-label-group" controlId="formBasicPassword">

                        <Form.Control className="form-input" type="password" placeholder="Enter New Password" required
                            autoComplete="on" value={password} name="password"
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            autoFocus
                        />
                        <Form.Label>Enter New Password</Form.Label>
                    </Form.Group>

                    <Form.Group className="form-label-group" controlId="formBasicPasswordAgain">
                        <Form.Control className="form-input" type="password" placeholder="Enter Password Again" required
                            autoComplete="on" value={passwordAgain} name="passwordAgain"
                            onChange={(event) => {
                                setPasswordAgain(event.target.value);
                            }}
                            autoFocus
                        />
                        <Form.Label>Enter Password Again</Form.Label>
                    </Form.Group>
                    <Button className="form-btn btn-block my-3" variant="dark" type="submit" text="Save" />
                </Form>
                {error && <ErrorMessage error={error} />}
            </Card.Body>
        </Card>
    )
}

export default ChangePassword
