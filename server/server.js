import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
const app = express();
import path from 'path'

import dotenv from "dotenv";
dotenv.config();

connectDB();
const __dirname = path.resolve()

import userRoute from "./router/userRouter.js";
import playlistRoute from "./router/playlistRouter.js";
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log("incoming")
app.use("/auth", userRoute);
app.use("/playlist", playlistRoute);

    app.use(express.static(path.join(__dirname, '/client/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    )
  

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on  port 5000`));
