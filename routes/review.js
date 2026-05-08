const express = require("express");
const router = express.Router({mergeParams: true});
// for nested routes.. means child inherit parameters of parent routes.. (here reviews inherit from listings routes )
const wrapAsync = require("../utils/wrapAsync.js");
const expressError = require("../utils/expressError");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const { validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// REVIEWS POST ROUTE
router.post("/", isLoggedIn, validateReview,wrapAsync( reviewController.createReview));


// DELETE REVIEW ROUTE
router.delete("/:reviewId", isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview ));

module.exports = router;