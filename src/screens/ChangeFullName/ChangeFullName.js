import React, { useContext, useState } from 'react'
import { Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../../components/Button/Button';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import UserContext from '../../contexts/UserContext';
import '../../ChangeSettings.css';


const ChangeFullName = ({ onChangeFullname }) => {
    const { user } = useContext(UserContext);
    const [fullname, setFullname] = useState('');

    return (
        <Card className="card-setting flex-row">
            <Card.Body className="card-body">
                <Card.Title className="card-title text-center pb-4">
                    Change Fullname
            </Card.Title>
                <Form className="form-setting" onSubmit={(e) => {
                    e.preventDefault()
                    return onChangeFullname(fullname)
                }
                }>
                    <Form.Group className="form-label-group" controlId="formBasicEmail">
                        <Form.Control className="form-input" type="text" placeholder="Enter New Fullname" required
                            autoComplete="on" value={fullname} name="fullname"
                            onChange={(event) => {
                                setFullname(event.target.value);
                            }}
                            autoFocus
                        />
                        <Form.Label>Enter New Fullname</Form.Label>
                    </Form.Group>
                    <Button className="form-btn btn-block my-3" variant="dark" type="submit" text="Save" />
                </Form>
                {/*  {error && <Error error={error} />} */}
            </Card.Body>
        </Card>
    )
}

export default ChangeFullName;
