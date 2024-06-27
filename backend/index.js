import "dotenv/config";
import { app } from "./app.js";
import mongoose from "mongoose";

const port = process.env.PORT || 4001;
const mongoUrl = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log(`DB is connected successfully`);
  } catch (err) {
    console.log(err);
  }
};

app.listen(port, () => {
  console.log(`Server is running at port:${port}`);
  connectDB();
});
