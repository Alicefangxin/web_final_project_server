import * as reviewsDao from "./reviews-dao.js";

const ReviewsController = (app) => {
    const createReview = async (req, res) => {
        const review = req.body
        const newReview = await reviewsDao.createReview(review)
        res.json(newReview)
    }

    const findReviewsByProf = async (req, res) => {
        const profID = req.params.pid
        const reviews = await reviewsDao.findReviewsByProf(profID)
        res.json(reviews)
    }

    const findReviewsByAuthor = async (req, res) => {
        const author = req.params.author
        const reviews = await reviewsDao.findReviewsByAuthor(author)
        res.json(reviews)
    }

    app.post('/reviews', createReview)
    app.get('/tempProfs/:pid/reviews', findReviewsByProf)
    app.get('/users/:author/reviews', findReviewsByAuthor)
}

export default ReviewsController;
