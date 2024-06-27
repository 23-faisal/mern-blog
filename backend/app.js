import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

export const app = express();

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});
