import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
// import userRoute from "./route/user.route.js";
import userRoute from './route/user.route.js';

const app = express();

app.use(cors());
app.use(express.json());
  
dotenv.config();

const PORT = process.env.PORT || 4000;
const URL = process.env.MongoDBURL;

// connect to mongoDB
// try {
//     mongoose.connect(URL, {
//         // useNewUrlParser: true,
//         // useUnifiedTopology: true,
//     });
//     console.log("Connected to mongoDB");
// } catch (error) {
//     console.log("Error: ", error);
// }

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(URL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  console.log("Database connected!!..");   
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});