const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapasync.js");
const Review = require("../models/review.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

const reviewsController= require("../controllers/reviews.js");
router.post(
  "/",isLoggedIn, 
  validateReview,
  wrapAsync(reviewsController.createReview)
);

router.delete(
  "/:reviewId",isLoggedIn,isReviewAuthor,
  wrapAsync(reviewsController.deleteReview)
);

module.exports = router;
