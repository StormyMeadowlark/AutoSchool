const Tag = require("../models/tags.jsx");
const asyncHandler = require("express-async-handler");

// Display list of all BookInstances.
exports.tag_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Tag list");
});

// Display detail page for a specific BookInstance.
exports.tag_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Tag detail: ${req.params.id}`);
});

// Display BookInstance create form on GET.
exports.tag_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Tag create GET");
});

// Handle BookInstance create on POST.
exports.tag_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Tag create POST");
});

// Display BookInstance delete form on GET.
exports.tag_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Tag delete GET");
});

// Handle BookInstance delete on POST.
exports.tag_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Tag delete POST");
});

// Display BookInstance update form on GET.
exports.tag_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Tag update GET");
});

// Handle bookinstance update on POST.
exports.tag_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Tag update POST");
});
