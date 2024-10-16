import express from "express"
import connectDb from "./utils/db.js"
import studentRouter from "./Routes/studentRoute.js"

const app = express()
const port = 3000
app.use(express.json())

app.use("/", studentRouter)

connectDb.connect()
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((err) => {
    console.error("Database connection error:", err.stack);
  });

app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error"
    return res.status (statusCode).json({success:false, statusCode,message})
})

app.listen(port, () =>{
    console.log("server is listening at port : " + port)
})
