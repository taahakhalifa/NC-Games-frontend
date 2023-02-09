import axios from "axios";

const reviewsAPI = axios.create({
    baseURL: "https://taahakhalifa-nc-games-api.onrender.com/api",
});

export const getUsers = () => {
    let path = "/users";
    return reviewsAPI.get(path).then(({ data }) => {
        return data.users;
    });
};

export const getReviews = () => {
    let path = `/reviews`;
    return reviewsAPI.get(path).then(({ data }) => {
        return data.reviews;
    });
};

export const getReviewById = (review_id) => {
    let path = `/reviews/${parseInt(review_id)}`;
    return reviewsAPI.get(path).then(({ data }) => {
        return data.review;
    });
};

export const getCommentsById = (review_id) => {
    let path = `/reviews/${review_id}/comments`;
    return reviewsAPI.get(path).then(({ data }) => {
        return data.comments;
    });
};

export const patchReviewById = (review_id, votesInc) => {
    let path = `/reviews/${review_id}`;
    const patchBody = {
        inc_votes: votesInc,
    };
    return reviewsAPI.patch(path, patchBody).then(({ data }) => {
        return data;
    });
};

export const postComment = (newComment, review_id, username) => {
    let path = `/reviews/${review_id}/comments`;
    const postBody = {
        username: username,
        body: newComment,
    };
    return reviewsAPI.post(path, postBody).then(({ data }) => {
        return data.comment;
    });
};
