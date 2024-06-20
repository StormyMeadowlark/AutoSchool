const blog = require("../models/blog.jsx");
const categories = require("../models/categories.jsx")
const comments = require("../models/comment.jsx")
const content = require("../models/content.jsx")
const images = require("../models/images.jsx")
const publishingInfo = require("../models/publishingInfo.jsx")
const tags = require("../models/tags.jsx")
const video = require("../models/videos.jsx")
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async(req,res,next) => {
  const [
    numBlogs,
    numCategories,
    numComments,
    numContents,
    numImages,
    numPublishingInfo,
    numTags,
    numVideos,
  ] = await Promise.all([
    blog.countDocuments({}).exec(),
    categories.countDocuments({}).exec(),
    comments.countDocuments({}).exec(),
    content.countDocuments({}).exec(),
    images.countDocuments({}).exec(),
    publishingInfo.countDocuments({}).exec(),
    tags.countDocuments({}).exec(),
    video.countDocuments({}).exec(),
  ]);

  res.render("index", {
    title: "HEM Automotive",
    blogs_count: numBlogs,
    categories_count: numCategories,
    comments_count: numComments,
    contents_count: numContents,
    images_count: numImages,
    publishing_infos_count: numPublishingInfo,
    tags_count: numTags,
    videos_count: numVideos,
  });
})

// Display list of all BookInstances.
exports.blog_list = asyncHandler(async (req, res, next) => {
  const allBlogs = await blog.find({}, "title summary")
    .sort({ title:1 })
    .populate("summary")
    .exec();

    res.render("blog_list", { title: "Blog List", blog_list: allBlogs})
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
