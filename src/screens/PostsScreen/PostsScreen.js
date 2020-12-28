
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from '../../components/Posts/Posts'
import { getPosts, getUsers } from '../../services/api';

const PostsScreen = () => {
    const history = useHistory();
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [loading, isLoading] = useState(false);
    const [show, setShow] = useState(true);
    /*  const handleAddPosts = () => {
        console.log('handleAddPost');
        history.push(`/posts/new`);
    } */

    useEffect(() => {
        const postsInit = async () => {
            try {
                const postData = await getPosts();
                console.log(postData.data);
                await setPosts(postData.data);
                const getData = await getUsers();
                console.log(getData.data);
                await setUsers(getData.data);

               await console.log(posts);
               await console.log(users);

                //awaitisLoading(false);
            } catch (err) {
                setError(err);
            }
        };

        //usersInit();
        postsInit();
        console.log(posts);
    }, []);

    const handleItemClick = (post) => {
        // todo
        console.log(post);
        console.log(`/posts/${post.id}`);
        history.push(`/posts/${post.id}`);
    };


    if (loading) {
        return <Loader />;
    }

    if (error) {
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
                {error}
            </p>
        </Alert>
    }

    return (
        <Posts posts={posts} users={users} onItemClick={handleItemClick} />
    )
}

export default PostsScreen;
