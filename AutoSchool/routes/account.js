var express = require("express");
var router = express.Router();
const account_controller = require("../controllers/accountController.jsx");

/// BOOKINSTANCE ROUTES ///
router.get("/account/", account_controller.account)
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
