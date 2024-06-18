const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TagSchema = new Schema({
  tag: [
    {
      type: "String",
      required: true,
    },
  ],
});

TagSchema.virtual("url").get(function () {
  return `/HEMAutoSchool/tag/${this.id}`;
});

module.exports = mongoose.model("tag", TagSchema);
