import reviewsModel from "./reviews-model.js";

export const createReview = (review) =>
    reviewsModel.create(review)

export const findReviewsByProfessor = (professor) =>
    reviewsModel
        .find({professor})
        .populate('author')
        .exec()

export const findReviewsByCourse = (course) =>
    reviewsModel.find({course})