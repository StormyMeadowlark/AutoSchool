const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    category: [{
        type: "String",
        required: true,
    }],
});

CategorySchema.virtual("url").get(function () {
  return `/HEMAutoSchool/category/${this.id}`;
});

module.exports = mongoose.model("category", CategorySchema);