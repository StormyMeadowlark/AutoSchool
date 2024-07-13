const Account = require("../models/account.jsx");
const asyncHandler = require("express-async-handler");

exports.account = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: account");
});

// Display list of all BookInstances.
exports.account_detail = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: User list");
});

// Display detail page for a specific BookInstance.
exports.account_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: User detail: ${req.params.id}`);
});

// Display BookInstance create form on GET.
exports.account_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: User create GET");
});

// Handle BookInstance create on POST.
exports.account_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: User create POST");
});

// Display BookInstance delete form on GET.
exports.account_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: User delete GET");
});

// Handle BookInstance delete on POST.
exports.account_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: User delete POST");
});

// Display BookInstance update form on GET.
exports.account_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: User update GET");
});

// Handle bookinstance update on POST.
exports.account_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: User update POST");
});
