const express = require("express");
const router = express.Router();

// Require controller modules.
const blog_controller = require("../controllers/blogController.jsx");
const category_controller = require("../controllers/categoriesController.jsx");
const comment_controller = require("../controllers/commentsController.jsx");
const content_controller = require("../controllers/contentController.jsx");
const image_controller = require("../controllers/imageController.jsx");
const publishingInfo_controller = require("../controllers/publishingInfoController.jsx");
const tag_controller = require("../controllers/tagController.jsx");
const video_controller = require("../controllers/videoController.jsx");
const account_controller = require("../controllers/accountController.jsx");

/// BOOK ROUTES ///

// GET catalog home page.
router.get("/", blog_controller.index);
// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/blog/create", blog_controller.blog_create_get);

// POST request for creating Book.
router.post("/blog/create", blog_controller.blog_create_post);

// GET request to delete Book.
router.get("/blog/:id/delete", blog_controller.blog_delete_get);

// POST request to delete Book.
router.post("/blog/:id/delete", blog_controller.blog_delete_post);

// GET request to update Book.
router.get("/blog/:id/update", blog_controller.blog_update_get);

// POST request to update Book.
router.post("/blog/:id/update", blog_controller.blog_update_post);

// GET request for one Book.
router.get("/blog/:id", blog_controller.blog_detail);

// GET request for list of all Book items.
router.get("/blogs", blog_controller.blog_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get("/category/create", category_controller.category_create_get);

// POST request for creating Author.
router.post("/category/create", category_controller.category_create_post);

// GET request to delete Author.
router.get("/category/:id/delete", category_controller.category_delete_get);

// POST request to delete Author.
router.post("/category/:id/delete", category_controller.category_delete_post);

// GET request to update Author.
router.get("/category/:id/update", category_controller.category_update_get);

// POST request to update Author.
router.post("/category/:id/update", category_controller.category_update_post);

// GET request for one Author.
router.get("/category/:id", category_controller.category_detail);

// GET request for list of all Authors.
router.get("/categories", category_controller.category_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/comment/create", comment_controller.comments_create_get);

//POST request for creating Genre.
router.post("/comment/create", comment_controller.comments_create_post);

// GET request to delete Genre.
router.get("/comment/:id/delete", comment_controller.comments_delete_get);

// POST request to delete Genre.
router.post("/comment/:id/delete", comment_controller.comments_delete_post);

// GET request to update Genre.
router.get("/comment/:id/update", comment_controller.comments_update_get);

// POST request to update Genre.
router.post("/comment/:id/update", comment_controller.comments_update_post);

// GET request for one Genre.
router.get("/comment/:id", comment_controller.comments_detail);

// GET request for list of all Genre.
router.get("/comments", comment_controller.comments_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get(
  "/content/create",
  content_controller.content_create_get
);

// POST request for creating BookInstance.
router.post(
  "/content/create",
  content_controller.content_create_post
);

// GET request to delete BookInstance.
router.get(
  "/content/:id/delete",
  content_controller.content_delete_get
);

// POST request to delete BookInstance.
router.post(
  "/content/:id/delete",
  content_controller.content_delete_post
);

// GET request to update BookInstance.
router.get(
  "/content/:id/update",
  content_controller.content_update_get
);

// POST request to update BookInstance.
router.post(
  "/content/:id/update",
  content_controller.content_update_post
);

// GET request for one BookInstance.
router.get("/content/:id", content_controller.content_detail);

// GET request for list of all BookInstance.
router.get("/contents", content_controller.content_list);

/// BOOK ROUTES ///

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/image/create", image_controller.image_create_get);

// POST request for creating Book.
router.post("/image/create", image_controller.image_create_post);

// GET request to delete Book.
router.get("/image/:id/delete", image_controller.image_delete_get);

// POST request to delete Book.
router.post("/image/:id/delete", image_controller.image_delete_post);

// GET request to update Book.
router.get("/image/:id/update", image_controller.image_update_get);

// POST request to update Book.
router.post("/image/:id/update", image_controller.image_update_post);

// GET request for one Book.
router.get("/image/:id", image_controller.image_detail);

// GET request for list of all Book items.
router.get("/images", image_controller.image_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get("/publishingInfo/create", publishingInfo_controller.publishingInfo_create_get);

// POST request for creating Author.
router.post("/publishingInfo/create", publishingInfo_controller.publishingInfo_create_post);

// GET request to delete Author.
router.get("/publishingInfo/:id/delete", publishingInfo_controller.publishingInfo_delete_get);

// POST request to delete Author.
router.post("/publishingInfo/:id/delete", publishingInfo_controller.publishingInfo_delete_post);

// GET request to update Author.
router.get("/publishingInfo/:id/update", publishingInfo_controller.publishingInfo_update_get);

// POST request to update Author.
router.post("/publishingInfo/:id/update", publishingInfo_controller.publishingInfo_update_post);

// GET request for one Author.
router.get("/publishingInfo/:id", publishingInfo_controller.publishingInfo_detail);

// GET request for list of all Authors.
router.get("/publishingInfos", publishingInfo_controller.publishingInfo_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/tag/create", tag_controller.tag_create_get);

//POST request for creating Genre.
router.post("/tag/create", tag_controller.tag_create_post);

// GET request to delete Genre.
router.get("/tag/:id/delete", tag_controller.tag_delete_get);

// POST request to delete Genre.
router.post("/tag/:id/delete", tag_controller.tag_delete_post);

// GET request to update Genre.
router.get("/tag/:id/update", tag_controller.tag_update_get);

// POST request to update Genre.
router.post("/tag/:id/update", tag_controller.tag_update_post);

// GET request for one Genre.
router.get("/tag/:id", tag_controller.tag_detail);

// GET request for list of all Genre.
router.get("/tags", tag_controller.tag_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get(
  "/video/create",
  video_controller.video_create_get
);

// POST request for creating BookInstance.
router.post(
  "/video/create",
  video_controller.video_create_post
);

// GET request to delete BookInstance.
router.get(
  "/video/:id/delete",
  video_controller.video_delete_get
);

// POST request to delete BookInstance.
router.post(
  "/video/:id/delete",
  video_controller.video_delete_post
);

// GET request to update BookInstance.
router.get(
  "/video/:id/update",
  video_controller.video_update_get
);

// POST request to update BookInstance.
router.post(
  "/video/:id/update",
  video_controller.video_update_post
);

// GET request for one BookInstance.
router.get("/video/:id", video_controller.video_detail);

// GET request for list of all BookInstance.
router.get("/videos", video_controller.video_list);

/// BOOKINSTANCE ROUTES ///
router.get("account/", account_controller.account)
// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get(
  "/account/create",
  account_controller.account_create_get
);

// POST request for creating BookInstance.
router.post(
  "/account/create",
  account_controller.account_create_post
);

// GET request to delete BookInstance.
router.get(
  "/account/:id/delete",
  account_controller.account_delete_get
);

// POST request to delete BookInstance.
router.post(
  "/account/:id/delete",
  account_controller.account_delete_post
);

// GET request to update BookInstance.
router.get(
  "/account/:id/update",
  account_controller.account_update_get
);

// POST request to update BookInstance.
router.post(
  "/account/:id/update",
  account_controller.account_update_post
);

// GET request for one BookInstance.
router.get("/account/:id", account_controller.account_detail);

module.exports = router;


