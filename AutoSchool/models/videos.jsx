const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  video: [
    {
      type: "String",
      required: true,
    },
  ],
});

VideoSchema.virtual("url").get(function () {
  return `/HEMAutoSchool/video/${this.id}`;
});

module.exports = mongoose.model("Video", VideoSchema);
