import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../PostDetail.css';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
<script src="https://kit.fontawesome.com/e9453f8926.js" crossorigin="anonymous"></script>


const Posts = ({ posts, users, onItemClick }) => {

  return (
    <>
      
        {posts.map((post,index) => (
          <div key={index} className="post-card">

            <div className="post-image-box">

              <img src={post.image} className="post-image" onerror="if (this.src != 'error.jpg') this.src = 'error.jpg';" alt="NO IMAGE" />
              {console.log(post.image)}
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
                    by:{users.filter((user) => user.id == post.user_id).map((getuser) => getuser.fullname)}
                  </p>
                </Col>
              </Row>
            </div>

            <div className="post-body">
              {post.body}
            </div>
            <div className="post-footer-readmore">
              <Link className="post-footer-button" onClick={() => onItemClick(post)}>Read more</Link>
            </div>
          </div>))}
      
    </>



  )
}

export default Posts;


