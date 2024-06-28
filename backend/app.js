import express from "express";
import bodyParser from "body-parser";
import { authRouter } from "./routes/auth.route.js";
import { userRouter } from "./routes/users.route.js";

export const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
