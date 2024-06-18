var express = require('express');
var router = express.Router();

// Get home page
router.get("/", function(req, res) {
  res.redirect("/autoSchool");
});

module.exports = router;