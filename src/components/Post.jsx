import React from "react";
import Votes from "./Votes";
import Comments from "./Comments";
import AddComment from "./AddComment";

function Post({ review }) {
    const capitlised = review.category.toUpperCase()
    const categoryName = capitlised.replace(/-/g, " ");

    let date = review.created_at.slice(0, 10).replace(/-/g, " ").split(" ")
    let realDate = `${date[2]}/${date[1]}/${date[0]}`;

    return (
        <section className="blue-background">
            <section className="post-wrapper">
                <section className="post-container white-background">
                    <div className="post-header">
                        <Votes review={review} />
                        <div className="post-info">
                            <h1 className="post-title">{review.title}</h1>
                            <p className="post-categroy">{categoryName}</p>
                            <p className="post-author">By {review.owner}</p>
                            <p className="post-created-at">
                                Posted on: {realDate}
                            </p>
                        </div>
                    </div>

                    <div className="post-body">
                        <img
                            src={review.review_img_url}
                            alt={`${review.designer} product pic`}
                            className="post-img"
                        />
                        <p className="post-text">{review.review_body}</p>
                    </div>
                </section>
            </section>
            <AddComment username={review.owner}/>
            <Comments review={review}/>
        </section>
    );
}

export default Post;
