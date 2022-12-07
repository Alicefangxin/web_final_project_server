import * as reviewsDao from "./reviews-dao.js";

const ReviewsController = (app) => {
    const createReview = async (req, res) => {
        const review = req.body
        const currentUser = req.session['currenUser']
        review.author = currentUser.username
        const actualReview = await reviewsDao.createReview(review)
        res.json(review)
    }
    app.post('/reviews', createReview)
}

export default ReviewsController;