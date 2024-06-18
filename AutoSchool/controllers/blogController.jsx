const Blog = require("../models/blog.jsx");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async(req,res,next) => {
  res.send("NOT IMPLEMENTED: Site Home Page")
})

// Display list of all BookInstances.
exports.blog_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Blog list");
});

// Display detail page for a specific BookInstance.
exports.blog_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Blog detail: ${req.params.id}`);
});

// Display BookInstance create form on GET.
exports.blog_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Blog create GET");
});

// Handle BookInstance create on POST.
exports.blog_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Blog create POST");
});

// Display BookInstance delete form on GET.
exports.blog_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Blog delete GET");
});

// Handle BookInstance delete on POST.
exports.blog_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Blog delete POST");
});

// Display BookInstance update form on GET.
exports.blog_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Blog update GET");
});

// Handle bookinstance update on POST.
exports.blog_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Blog update POST");
});
