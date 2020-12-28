import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { Form, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createNewPost } from '../../services/api';
import UserContext from '../../contexts/UserContext';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import '../../AddNewPost.css'

const AddNewPost = () => {
    const history = useHistory();
    const { user } = useContext(UserContext);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [validated, setValidated] = useState(false);
    const [newPost, setNewPost] = useState([]);

    const handleSubmit = (event) => {
        console.log(user);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            
            event.preventDefault();
            event.stopPropagation();
        } else {
            setValidated(true);
            handleCreateNewPost();
        }
        event.preventDefault();

    }
    const handleCreateNewPost = async () => {
        try {
            setNewPost({
                ...newPost,
                user_id: user.id,
                author: user.fullname
            })
            setLoading(true);
            const { data } = await createNewPost(newPost);
            setLoading(false);
            history.push(`/posts/${data.id}`);

        } catch (err) {
            setError(err.message);
        }
    }
if(loading){
    return <Loader className="m-auto" />
}

    return (
            <div className="newPost-card mt-5 mx-auto">

                <div className="newPost-body">
                    <Card.Title className="newPost-title text-center pb-4">
                        Create New Post
                            </Card.Title>

                    <Form
                        className="form-newPost"
                        noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Row>
                            <Form.Group as={Col} className="form-label-group" controlId="validationCustom01">

                                <Form.Control
                                    className="form-input"
                                    required
                                    type="text"
                                    placeholder="Title"
                                    onChange={(event) => setNewPost({
                                        ...newPost,
                                        title: event.target.value
                                    })}
                                />
                                <Form.Label>Title</Form.Label>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} className="form-label-group" controlId="validationCustomUsername">

                                <Form.Control
                                    className="form-input"
                                    type="text"
                                    placeholder="Body"
                                    aria-describedby="Body"
                                    required
                                    onChange={(event) => setNewPost({
                                        ...newPost,
                                        body: event.target.value,
                                    })}
                                />
                                <Form.Label>Body</Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    Please Enter Describe
            </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group className="form-label-group" >
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                            />
                        </Form.Group>
                        {error && <ErrorMessage error={error} />}
                        <Button className="form-btn btn-block my-3" variant="dark" type="submit" text="Create" />
                    </Form>
                </div>
            </div>
    );
};

export default AddNewPost;
