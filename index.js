const express = require("express");
const userRouter = require("./router/route");
const blogRouter = require("./router/blog"); // Corrected path to the user router
const connectToMongodb = require("./db");
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the user router for paths starting with /user
app.use("/user", userRouter);
app.use("/blog", blogRouter);
connectToMongodb();

const PORT = 8001;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
