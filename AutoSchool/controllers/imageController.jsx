const Image = require("../models/images.jsx");
const asyncHandler = require("express-async-handler");

// Display list of all BookInstances.
exports.image_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Image list");
});

// Display detail page for a specific BookInstance.
exports.image_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Image detail: ${req.params.id}`);
});

// Display BookInstance create form on GET.
exports.image_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Image create GET");
});

// Handle BookInstance create on POST.
exports.image_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Image create POST");
});

// Display BookInstance delete form on GET.
exports.image_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Image delete GET");
});

// Handle BookInstance delete on POST.
exports.image_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Image delete POST");
});

// Display BookInstance update form on GET.
exports.image_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Image update GET");
});

// Handle bookinstance update on POST.
exports.image_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Image update POST");
});
