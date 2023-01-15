import cookieParser from "cookie-parser";
import express from "express";
import fileUpload from "express-fileupload";
import User from "./routers/User.js";
import cors from "cors"
export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
  }));
app.use(cors());
app.use("/api/v1", User);

app.get("/",(req,res)=>{
  res.send("server is working");
})
