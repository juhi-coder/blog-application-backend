const mongoose = require("mongoose");

const connectToMongodb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://skrai9471930131:jsdec10@cluster0.pahsj7x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("mongodb conncted"));
};
module.exports = connectToMongodb;
