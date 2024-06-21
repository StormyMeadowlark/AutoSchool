const Category = require("../models/categories.jsx");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display list of all BookInstances.
exports.category_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category list");
});

// Display detail page for a specific BookInstance.
exports.category_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Category detail: ${req.params.id}`);
});

// Display BookInstance create form on GET.
exports.category_create_get = (req, res, next) => {
  res.render("category_form", { title: "Create Category" })
};

// Handle BookInstance create on POST.
exports.category_create_post = [
  //validate & sanitize the field.
  body("category", "Category name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),
]

// Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

// Create a Category object with escaped & trimmed data.
const category = new Category({category: req.body.name});
   if (!errors.isEmpty()) {
    // There are errors. Render the form again with sanitized values/error messages.
    res.render("category_form",{
      title: "Create category",
      category: category,
      errors: errors.array(),
    });
    return;
  } else {
    const categoryExists = await Category.findOne({ category: req.body.name })
      .collation({ locale:"en", strength: 2 })
      .exec();
    if (categoryExists) {
      // Category exists, redirect to its detail page.
      res.redirect(categoryExists.url);
    } else {
      await category.save();
      // New category saved. Redirect to category detail page.
      res.redirect(category.url);
    }
    }
  },
);

// Display BookInstance delete form on GET.
exports.category_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category delete GET");
})

// Handle BookInstance delete on POST.
exports.category_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category delete POST");
});

// Display BookInstance update form on GET.
exports.category_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category update GET");
});

// Handle bookinstance update on POST.
exports.category_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category update POST");
});
