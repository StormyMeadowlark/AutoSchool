const Content = require("../models/content.jsx");
const asyncHandler = require("express-async-handler");

// Display list of all BookInstances.
exports.content_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Content list");
});

// Display detail page for a specific BookInstance.
exports.content_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Content detail: ${req.params.id}`);
});

// Display BookInstance create form on GET.
exports.content_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Content create GET");
});

// Handle BookInstance create on POST.
exports.content_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Content create POST");
});

// Display BookInstance delete form on GET.
exports.content_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Content delete GET");
});

// Handle BookInstance delete on POST.
exports.content_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Content delete POST");
});

// Display BookInstance update form on GET.
exports.content_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Content update GET");
});

// Handle bookinstance update on POST.
exports.content_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Content update POST");
});
