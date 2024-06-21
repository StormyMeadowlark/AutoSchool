const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userType: {
      type: String,
      required: true,
      enum: ["Super User", "Executive Admin", "Admin", "Member", "Subscriber"],
    },
    joinDate: {
      type: Date,
      default: Date.now(),
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        Required: true,
    },
    birthMonth: {
        type: Number,
        min: 1,
        max: 12,
    },
    phoneNum: {
        type: Number,
    },
    email: {
        type: String,
    },
    callable: {
        type: Boolean,
        default: true,
    },
    smsable: {
        type: Boolean,
        default: true,
    },
    marketable:{
        type: Boolean,
        default: true,
    },
    smsMarketable:{
        type: Boolean,
        default: true,
    },
    emailMarketable: {
        type: Boolean,
        default: true,
    },
    apptReminders: {
        type: Boolean,
        default: true,
    },
    laborRate: {
        type: Number,
        default: 140,
    },
    houseNum: {
        type: Number,
    },
    streetName: {
        type: String,
    },
    streetSuffix:{
        type: String,
    },
    addressPrefix2: {
        type: String,
    },
    addressNum2: {
        type: Number,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zip: {
        type: Number,
    },
    password: {
        type: String,
    },
}
);

UserSchema.virtual("url").get(function () {
  return `/account/users/${this.id}`;
});

module.exports = mongoose.model("User", UserSchema);
