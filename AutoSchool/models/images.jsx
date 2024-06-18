const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  image: [
    {
      type: "String",
      required: true,
    },
  ],
});

ImageSchema.virtual("url").get(function () {
  return `/HEMAutoSchool/image/${this.id}`;
});

module.exports = mongoose.model("Image", ImageSchema);
