import axios from "axios";

const reviewsAPI = axios.create({
    baseURL: "https://taahakhalifa-nc-games-api.onrender.com/api",
});

export const getReviews = () => {
    let path = "/reviews";
    return reviewsAPI.get(path).then(({ data }) => {
        return data.reviews;
    });
};
