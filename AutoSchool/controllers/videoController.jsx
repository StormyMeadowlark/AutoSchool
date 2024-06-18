const Video = require("../models/videos.jsx");
const asyncHandler = require("express-async-handler");

// Display list of all BookInstances.
exports.video_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Video list");
});

// Display detail page for a specific BookInstance.
exports.video_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Video detail: ${req.params.id}`);
});

// Display BookInstance create form on GET.
exports.video_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Video create GET");
});

// Handle BookInstance create on POST.
exports.video_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Video create POST");
});

// Display BookInstance delete form on GET.
exports.video_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Video delete GET");
});

// Handle BookInstance delete on POST.
exports.video_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Video delete POST");
});

// Display BookInstance update form on GET.
exports.video_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Video update GET");
});

// Handle bookinstance update on POST.
exports.video_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Video update POST");
});
