import axios from "axios";

const reviewsAPI = axios.create({
    baseURL: "https://taahakhalifa-nc-games-api.onrender.com/api",
});

export const getReviews = () => {
    let path = `/reviews`;
    return reviewsAPI.get(path).then(({ data }) => {
        return data.reviews;
    });
};

export const getReviewById = (review_id) => {
    let path = `/reviews/${review_id}`;
    return reviewsAPI.get(path).then(({ data }) => {
        return data.review;
    });
};

export const getUsers = () => {
    let path = "/users";
    return reviewsAPI.get(path).then(({ data }) => {
        return data.users;
    });
};

export const getComments = (review_id) => {
    let path = `/reviews/${review_id}/comments`;
    return reviewsAPI
        .get(path, { params: { review_id: review_id } })
        .then(({ data }) => {
            return data.comments;
        });
};
