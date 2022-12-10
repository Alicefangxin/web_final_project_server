import reviewsModel from "./reviews-model.js";

export const createReview = async (review) => {
    const newReview = {
        prof: review.profID,
        author: review.author,
        QUALITY: review.QUALITY,
        DIFFICULTY: review.DIFFICULTY,
        WouldTakeAgain: review.WouldTakeAgain,
        content: review.content
    };
    return await reviewsModel.create(newReview)
}

export const findReviewsByProf = (profID) =>
    reviewsModel.find({prof: profID})

export const findReviewsByAuthor = (author) =>
    reviewsModel.find({author: author})
