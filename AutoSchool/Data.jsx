#! /user/bin/env node
console.log(
  'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);
const Blog = require("./models/blog.jsx");
const Category = require("./models/categories.jsx");
const Comment = require("./models/comment.jsx");
const Content = require("./models/content.jsx");
const Image = require("./models/images.jsx");
const PublishingInfo = require("./models/publishingInfo.jsx");
const Tag = require("./models/tags.jsx");
const Video = require("./models/videos.jsx");

const blogs = [];
const categories = [];
const comments = [];
const contents = [];
const images = [];
const publishingInfos = [];
const tags = [];
const videos = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories();
  await createImages();
  await createTags();
  await createVideos();
  await createComments();
  await createContents();
  await createPublishingInfos();
  await createBlogs();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// genre[0] will always be the Fantasy genre, regardless of the order
// in which the elements of promise.all's argument complete.

async function commentCreate(index, commentAuthor, commentEmail, commentDate, comment, reply) {
  const commentdetail = ({commentAuthor: commentAuthor, commentDate: commentDate, comment: comment});
  if (commentEmail != false) comment.commentEmail = commentEmail;
  if (reply != false) comment.reply = reply;

  const commentdetails = new Comment(commentdetail);

  await commentdetails.save();
  comments[index] = comment;
  console.log(`Added comment: ${commentAuthor}`);
};

async function contentCreate(index, paragraphs, images, videos, headers) {
  const contentdetails = ({paragraphs: paragraphs, headers: headers});
  if (images != false) contentdetails.images = images;
  if (videos != false) contentdetails.videos = videos;
  const contentdetail = new Content(contentdetails);
  await contentdetail.save();
  contents[index] = contentdetail;
  console.log(`Added content: ${index}`);
};

async function ImageCreate(index, type) {
  const imagedetails = new Image({type: type});
await imagedetails.save();
images[index] = imagedetails;
console.log(`Added image: ${index}`);
};

async function PublishingInfoCreate(index, name, image, authorEmail, authorPhone, authorOrganization, authorTitleAtOrg, ) {
  const publishinginfodetails = ({ name: name, image: image, authorEmail: authorEmail, authorPhone: authorPhone});
  if (authorOrganization != false) publishinginfodetails.authorOrganization = authorOrganization;
  if (authorTitleAtOrg != false) publishinginfodetails.authorTitleAtOrg = authorTitleAtOrg;
  const publishingInfo = new PublishingInfo(publishinginfodetails)
  await publishingInfo.save();
  publishingInfos[index] = publishingInfo;
  console.log(`Added publishingInfo: ${name}`);
}; 

async function BlogCreate(index, title, summary, publishingInfo, content, categories, tags, comments, status, editorName, publishedDate, editedTime) {
  const blogdetail = ({ title: title, summary: summary, publishingInfo: publishingInfo, content: content, categories: categories, tags: tags, status: status, editedTime: editedTime, });
  if (comments != false) blogdetail.comments = comments;
  if (editorName != false) blogdetail.editorName = editorName;
  if (publishedDate != false) blogdetail.publishedDate = publishedDate;

const blog = new Blog(blogdetail);
  await blog.save();
  blogs[index] = blog;
  console.log(`Added blog: ${title}`);
};

async function TagCreate(index, type) {
  const tag = new Tag({type: type});
await tag.save();
tags[index] = tag;
console.log(`Added tag: ${tag}`);
};

async function CategoryCreate(index, type) {
  const category = new Category({type: type});
await category.save();
categories[index] = category;
console.log(`Added category: ${category}`);
};

async function VideoCreate(index, video) {
  const videodetails = new Video({video: video});
await videodetails.save();
videos[index] = video;
console.log(`Added video: ${video}`);
};


async function createTags() {
  console.log("Adding Tags");
  await Promise.all([
    TagCreate(0, "Diagnostics"),
    TagCreate(1, "Informational"),
    TagCreate(2, "Deep Dive"),
    TagCreate(3, "Quick Read"),
  ]);
};
async function createCategories() {
  console.log("Adding Categories");
  await Promise.all([
    CategoryCreate(0, "A/C"),
    CategoryCreate(1, "Oil"),
    CategoryCreate(2, "Tires"),
  ]);
};

async function createVideos() {
  console.log("Adding Videos");
  await Promise.all([
    VideoCreate(0, "video 1 url"),
    VideoCreate(1, "video 2 url"),
  ]);
};

async function createImages() {
  console.log("Adding Images");
  await Promise.all([
    ImageCreate(0, "url for image 1"),
    ImageCreate(1, "url for image 2"),
    ImageCreate(2, "url for image 3"),
    ImageCreate(3, "url for image 4"),
    ImageCreate(4, "url for image 5"),
    ImageCreate(5, "url for image 6"),
    ImageCreate(6, "url for image 7"),
    ImageCreate(7, "url for image 8"),
    ImageCreate(8, "url for image 9"),
    ImageCreate(9, "url for image 10"),
  ]);
};
async function createComments() {
  console.log("Adding Comments");
  await Promise.all([
    commentCreate(0, "Bob Smith", false, "11/7/22", "were gonna see how this works", false),
    commentCreate(1, "Jane Lopez", false, "11/22/22", "or if it works", false),
    commentCreate(2, "Marty Douglas", "md39508432jvids@yahoo.com", "11/22/22", "I need to see the blogs again", false),
    commentCreate(3, "Brian Greene", "GreeneMe@hotmail.com", "1/2/23", "to know where to put replies", false),
    commentCreate(4, "Mario Dickson", "md3895543@gmail.com", "1/3/23", "this will be easier with a UI", false),
    commentCreate(5, "Amy Miles", false, "1/24/24", "or at least I hope so", false),
    commentCreate(6, "Garrett Ward", false, "2/15/24", "if it works it will be cool", false),
    commentCreate(7, "Emily Jane", false, "6/3/24", "So here goes", false),
    commentCreate(8, "HEM Automotive", false, "1/2/24", "fdsfdsoiak;", false),
  ]);
}

async function createContents() {
  console.log("Adding Contents");
  await Promise.all([
    contentCreate(0, ["this is the the first paragraph","This is the seconds", "and so on ..."], false, false, ["These are my blog headers", "Sections", "Sections1", "more sections"]),
    contentCreate(1, ["this is the the first paragraph2","This is the seconds2", "and so on ...2"], [images[0],images[1],images[2]], Video[0], ["These are my blog headers", "Sections", "Sections1", "more sections"]),
    contentCreate(2, ["this is the the first paragraph3","This is the seconds3", "and so on ...3"], false, false, ["These are my blog headers", "Sections", "Sections1", "more sections"]),
    contentCreate(3, ["this is the the first paragraph4","This is the seconds4", "and so on ...4"], [images[4],images[5],images[6]], false, ["These are my blog headers", "Sections", "Sections1", "more sections"]),
    contentCreate(4, ["this is the the first paragraph5","This is the seconds5", "and so on ...5"], [images[7],images[3]], Video[1], ["These are my blog headers", "Sections", "Sections1", "more sections"]),
  ]);
};



async function createPublishingInfos() {
  console.log("Adding Publisher Information");
  await Promise.all([
    PublishingInfoCreate(0,"Ashlee",images[7],"cjdisomnfe@fdks.com",7894561230,"SME","CEO & Founder"),
    PublishingInfoCreate(1,"Jason",images[8],"vcxjnirfdioa@kakfdso.com",1234056789,"HEM","Partner"),
    PublishingInfoCreate(2,"Shawn",images[9],"fdsafdsafdsaiea@jfdoisa.com",654321987,"HEM","Service Advisor"),
  ])
}


async function createBlogs() {
  console.log("Adding Blogs");
  await Promise.all([
    BlogCreate(
      0,
      "5 Signs you need to get your A/C Checked",
      "Awesome Blog about A/C",
      publishingInfos[0],
      contents[0],
      Category[0],
      [tags[0], tags[1], tags[3]],
      false,
      "Draft",
      false,
      "8/9/10",
      "8/31/23"
    ),
    BlogCreate(
      1,
      "How Often Should I Change My Oil?",
      "more often than you think",
      publishingInfos[0],
      contents[1],
      Category[1],
      [tags[1], tags[3]],
      false,
      "Published",
      "Ashlee",
      "3/2/23",
      "5/3/24"
    ),
    BlogCreate(
      2,
      "Tire Talk",
      "It's all about tires",
      publishingInfos[0],
      contents[2],
      Category[2],
      [tags[0], tags[2]],
      false,
      "Published Restricted",
      "Ashlee",
      "7/31/23",
      "7/31/23"
    ),
    BlogCreate(
      3,
      "How does my A/C work",
      "learn the parts and pieces fit together.",
      publishingInfos[1],
      contents[3],
      Category[0],
      tags[2],
      false,
      "Needs Review",
      false,
      false,
      "5/29/23"
    ),
    BlogCreate(
      3,
      "Why is the new freon so expensive?",
      "TLDR; It is more environmentally friendly",
      publishingInfos[2],
      contents[4],
      Category[0],
      [tags[1], tags[2]],
      false,
      "Scheduled",
      "Ashlee",
      "6/20/2024",
      "5/3/23"
    ),
  ]);
}