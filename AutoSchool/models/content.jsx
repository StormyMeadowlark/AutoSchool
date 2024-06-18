const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContentSchema = new Schema({
    paragraphs: [{
        type: "String",
        required: true,
    }],
    image: {
        type: Schema.Types.ObjectId, 
        ref: "image"
    },
    video: {
        type: Schema.Types.ObjectId, 
        ref: "video"
    },
    headers: [{
        type: "String",
        required: true,
    }],
});

ContentSchema.virtual("url").get(function () {
    return `/HEMAutoSchool/content/${this.id}`;
});

module.exports = mongoose.model("Content", ContentSchema);