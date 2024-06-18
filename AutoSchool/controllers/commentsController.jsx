const Comments = require("../models/comment.jsx");
const asyncHandler = require("express-async-handler");

// Display list of all BookInstances.
exports.comments_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Comments list");
});

// Display detail page for a specific BookInstance.
exports.comments_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Comments detail: ${req.params.id}`);
});

// Display BookInstance create form on GET.
exports.comments_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Comments create GET");
});

// Handle BookInstance create on POST.
exports.comments_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Comments create POST");
});

// Display BookInstance delete form on GET.
exports.comments_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Comments delete GET");
});

// Handle BookInstance delete on POST.
exports.comments_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Comments delete POST");
});

// Display BookInstance update form on GET.
exports.comments_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Comments update GET");
});

// Handle bookinstance update on POST.
exports.comments_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Comments update POST");
});
