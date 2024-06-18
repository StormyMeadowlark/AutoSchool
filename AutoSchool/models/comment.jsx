const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    commentAuthor: {
        type: "String",
        required: true,
    },
    commentEmail: {
        type: "String",
        required: false,
    },
    commentDate: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    comment: {
        type: "string",
        required: true,
    },
    reply: [{
        type: Schema.Types.ObjectId, 
        ref: "comment",
        required: false
    }]
});

CommentSchema.virtual("url").get(function () {
    return `/HEMAutoSchool/comment/${this.id}`;
});

module.exports = mongoose.model("Comment", CommentSchema);