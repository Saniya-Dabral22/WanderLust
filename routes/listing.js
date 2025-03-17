const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapasync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer=require("multer");
const {storage}= require("../cloudConfig.js");
const upload=multer({storage});



//index and create route
router.route("/").get(wrapAsync(listingController.Index))
.post(
  isLoggedIn, //ensure user is logged in before creating a listing
 upload.single('listing[image]'), validateListing,
  wrapAsync(listingController.createListing)
);
//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);
//show and update route and delete route
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.editListing)
);

module.exports = router;
