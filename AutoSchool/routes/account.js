var express = require("express");
var router = express.Router();
const account_controller = require("../controllers/accountController.jsx");
// Get home page
router.get("/account", account_controller.account);

module.exports = router;
