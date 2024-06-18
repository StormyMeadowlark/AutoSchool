const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
    max: 500,
  },
  publishingInfo: {
    type: Schema.Types.ObjectId,
    ref: "publishingInfo",
    required: true,
  },
  content: {
    type: Schema.Types.ObjectId,
    ref: "content",
    required: true,
  },
  categories: [{
      type: Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    }],
  tags: [{
      type: Schema.Types.ObjectId,
      ref: "tags",
      required: true,
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "comment",
        required: false,
    }],
    status: {
        type: "string",
        enum: ["Draft", "Needs Review", "Scheduled", "Published", "Published Restricted"]

    },
    editorName: {
      type: String,
      required: false,
      max: 100
    },
    publishedDate:{
      type: Date,
      required: false,
    },
    editedTime: {
      type: Date,
      required: true,
      default: Date.now(),
    }
});

BlogSchema.virtual("url").get(function () {
  return `/HEMAutoSchool/blog/${this.id}`;
});

module.exports = mongoose.model("Blog", BlogSchema);