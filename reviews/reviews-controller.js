import * as reviewsDao from "./reviews-dao.js";

const ReviewsController = (app) => {
    const createReview = async (req, res) => {
        const review = req.body
        const newReview = await reviewsDao.createReview(review)
        res.json(newReview)
    }

    const findAllReviews = async(req, res) => {
        const reviews = await reviewsDao.findAllReviews()
        res.json(reviews)
    }

    const findReviewsByProf = async (req, res) => {
        const profID = req.params.profID
        const reviews = await reviewsDao.findReviewsByProf(profID)
        res.json(reviews)
    }

    const findReviewsByAuthor = async (req, res) => {
        const author = req.params.author
        const reviews = await reviewsDao.findReviewsByAuthor(author)
        res.json(reviews)
    }

    app.post('/reviews', createReview)
    app.get('/reviews', findAllReviews)
    app.get('/profs/:profID/reviews', findReviewsByProf)
    app.get('/users/:author/reviews', findReviewsByAuthor)
}

export default ReviewsController;
