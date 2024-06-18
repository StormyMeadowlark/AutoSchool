const PublishingInfo = require("../models/publishingInfo.jsx");
const asyncHandler = require("express-async-handler");

// Display list of all BookInstances.
exports.publishingInfo_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: PublishingInfo list");
});

// Display detail page for a specific BookInstance.
exports.publishingInfo_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: PublishingInfo detail: ${req.params.id}`);
});

// Display BookInstance create form on GET.
exports.publishingInfo_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: PublishingInfo create GET");
});

// Handle BookInstance create on POST.
exports.publishingInfo_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: PublishingInfo create POST");
});

// Display BookInstance delete form on GET.
exports.publishingInfo_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: PublishingInfo delete GET");
});

// Handle BookInstance delete on POST.
exports.publishingInfo_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: PublishingInfo delete POST");
});

// Display BookInstance update form on GET.
exports.publishingInfo_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: PublishingInfo update GET");
});

// Handle bookinstance update on POST.
exports.publishingInfo_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: PublishingInfo update POST");
});
