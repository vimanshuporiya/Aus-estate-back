import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js"
import postRoute from "./routes/post.route.js"
import testRoute from "./routes/test.route.js"
import userRoute from './routes/user.route.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express({ origin: process.env.https://main--frontend55.netlify.app/, credentials: true });
const port = process.env.PORT || 8800
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use('/api/users', userRoute);
app.use("/api/posts", postRoute);
 app.use("/api/test", testRoute);

//  app.use("/api/test", (req, res) => {
//     res.send("It works!");
  // });
// app.use("/api/auth/register", (req,res)=>{
//     res.send("It works!")
// })

// app.use("/api/auth/login", (req,res)=>{
//     res.send("It works!")
// })

// app.use("/api/auth/logout", (req,res)=>{
//     res.send("It works!")
// })

// app.use("/api/posts", (req,res)=>{
//     res.send("It works!")
// })

// app.use("/api/posts/12321", (req,res)=>{
//     res.send("It works!")
// })

app.listen(port , () => {
    console.log("Server is running")
})
