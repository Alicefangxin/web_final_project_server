import * as reviewsDao from "./reviews-dao.js";

const ReviewsController = (app) => {
    const createReview = async (req, res) => {
        const review = req.body
        const currentUser = req.session['currentUser']
        review.userID = currentUser._id
        const actualReview = await reviewsDao.createReview(review)
        res.json(review)
    }
    app.post('/reviews', createReview)
}

export default ReviewsController;