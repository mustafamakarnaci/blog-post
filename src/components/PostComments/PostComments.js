import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../comments.css';
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />



const PostComments = ({ comments }) => {

    return (

        <>
        <h2>Comments</h2>
            {comments.map((comment) =>

                <div className="container">
                
                    <div className="row">
                        <div className="col-md-11">
                            <div className="media g-mb-30 media-comment">
                                <img className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Image Description" />
                                
                                <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                                    <div className="g-mb-15">
                                        <h5 className="h5 g-color-gray-dark-v1 mb-0">{comment.author}</h5>
                                        <span className="g-color-gray-dark-v4 g-font-size-12">{comment.createdAt}</span>
                                    </div>

                                    <p>{comment.body}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default PostComments;


