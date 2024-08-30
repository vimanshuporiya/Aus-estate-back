import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js"
import postRoute from "./routes/post.route.js"
import testRoute from "./routes/test.route.js"
import userRoute from './routes/user.route.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8800
// const corsOptions = {
//   origin: [`${process.env.CLIENT_URL}`],
//   methods: "GET,HEAD,PUT,OPTIONS,POST,DELETE",
//   allowedHeaders: [
//     "Access-Control-Allow-Headers",
//     "Origin",
//     "X-Requested-With",
//     "Content-Type",
//     "Accept",
//     "Authorization",
//     "token",
//     "Access-Control-Request-Method",
//     "Access-Control-Request-Headers",
//     "Access-Control-Allow-Credentials",
//   ],
//   credentials: true,
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
// };
// app.use(cors(corsOptions));
app.use(function(req, res, next) {
      // res.header("Access-Control-Allow-Origin", "*");
// , 'https://gamebrag.onrender.com'
      const allowedOrigins = ['http://localhost:5173', 'https://ausnew.netlify.app'];
      const origin = req.headers.origin;
      if (allowedOrigins.includes(origin)) {
           res.setHeader('Access-Control-Allow-Origin', origin);
      }
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
      res.header("Access-Control-Allow-credentials", true);
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
      next();
    });

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
