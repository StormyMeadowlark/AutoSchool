const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PublishingInfoSchema = new Schema({
    name: {
        type: "String",
        required: true
    },
    image: {
        type: Schema.Types.ObjectId, 
        ref: "Image",
        required: true
    },
    authorEmail: {
        type: "String",
        required: true
    },
    authorPhone:{
        type: Number,
        required: true,
        minLength: 10,
        maxLength: 13, 
    },
    authorOrganization: {
        type: "String",
        required: false
    },
    authorTitleAtOrg: {
        type: "String",
        required: false
    },
})


PublishingInfoSchema.virtual("url").get(function () {
  return `/HEMAutoSchool/publishinginfo/${this.id}`;
});

module.exports = mongoose.model("PublishingInfo", PublishingInfoSchema);

