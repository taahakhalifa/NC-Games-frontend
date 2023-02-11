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

export const getReviews = (sort_by, order) => {
    let path = `/reviews`;
    return reviewsAPI
        .get(path, {
            params: {
                sort_by: sort_by,
                order: order,
            },
        })
        .then(({ data }) => {
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

export const postComment = (comment, review_id, username) => {
    let path = `/reviews/${review_id}/comments`;
    const postBody = {
        username: username,
        body: comment,
    };
    return reviewsAPI.post(path, postBody).then(({ data }) => {
        console.log(data);
        return data.comment;
    });
};

export const getCategories = () => {
    let path = `/categories`;
    return reviewsAPI.get(path).then(({ data }) => {
        return data.categories;
    });
};

export const getReviewsByCategory = (slug, sort_by, order) => {
    let path = `/reviews`;
    return reviewsAPI
        .get(path, {
            params: {
                category: slug,
                sort_by: sort_by,
                order: order,
            },
        })
        .then(({ data }) => {
            return data.reviews;
        });
};
