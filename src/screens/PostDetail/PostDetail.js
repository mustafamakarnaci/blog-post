import React, { useContext, useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getCommentsByPostId, getPostById, getUserById, getUsers } from '../../services/api';
import { Card, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from '../../components/Loader/Loader';
import Button from '../../components/Button/Button';
import PostComments from '../../components/PostComments/PostComments';
import '../../PostDetail.css';
import UserContext from '../../contexts/UserContext';
import { createNewComment } from '../../services/api';


const PostDetail = () => {

    const { user } = useContext(UserContext);
    const { postId } = useParams();
    const [userForComments, setUserForComments] = useState([]);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState([]);
    const [show, setShow] = useState(false);
    const [post, setPost] = useState([]);
    const ref = useRef(null);


    useEffect(() => {

        console.log(postId);
        const postInit = async () => {
            try {
                setLoading(true);
                const postdata = await getPostById(postId);
                await console.log(postdata.data);
                await setPost(postdata.data);

                const commentsData = await getCommentsByPostId(postId);
                await console.log(commentsData.data);
                await setComments(commentsData.data);

                const userData = await getUserById(postdata.data.user_id);
                await console.log(userData.data);
                await setUserForComments(userData.data);
                setLoading(false);

            } catch (error) {
                setError(error);
            }

        }
        postInit();

    }, [postId]);


    const handleAddNewComment = async () => {
        try {

            const { data } = await createNewComment(comment, postId);
            console.log(data);
            setComments(data);
            setComment({
                ...comment,
                body: ""
            });

        } catch (error) {
            setError(error);
        }
    }

    if(loading){
        return <Loader/>
    }

    return (

        <Container>
            <div className="post-card">

                <div className="post-image-box">

                    <img src={post.image} className="post-image" onerror="if (this.src != 'error.jpg') this.src = 'error.jpg';" alt="NO IMAGE" />
                </div>

                <div className="post-header border-0">
                    <Row className="m-0">
                        <Col className="post-col-title">
                            <p className="post-title">
                                {post.title}

                            </p>
                        </Col>
                    </Row>
                    <Row className="m-0">
                        <Col className="post-by-created">
                            <p className="post-card-text">
                                {post.createdAt}
                            </p>

                            <p className="post-card-text">
                                {userForComments.fullname}
                            </p>
                        </Col>
                    </Row>
                </div>

                <div className="post-body">
                    {post.body}
                </div>

                <div className="post-footer">
                    <Card className="my-2">
                        <Card.Body>
                            <InputGroup className="my-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Add new comment</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl as="textarea" name="commenttextarea" value={comment.body} onChange={(event) => setComment({
                                    ...comment,
                                    user_id: user.id,
                                    body: event.target.value,
                                    author: user.fullname

                                })} aria-label="With textarea" required />
                            </InputGroup>
                            <Row className="m-0 justify-content-end">
                                <Button text="Add new comment" onClick={handleAddNewComment} />
                            </Row>
                        </Card.Body>
                    </Card>
                    {comments && <PostComments comments={comments} />}
                </div>
            </div>
        </Container>
    )
}

export default PostDetail;

