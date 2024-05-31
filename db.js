const mongoose = require("mongoose");

const connectToMongodb = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/blog-application")
    .then(() => console.log("mongodb conncted"));
};
module.exports = connectToMongodb;
