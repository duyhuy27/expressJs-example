import express from "express";
import * as dotenv from "dotenv";
import { userRouter, studentRouter } from "./routes/index.js";
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
//routes
app.use("/users", userRouter);
app.use("/students", studentRouter);

app.get("/", (req, res) => {
  res.send("Hello World! abc hihi");
});
app.listen(port, async (req, res) => {
  console.log("====================================");
  console.log(`server listening on port ${port}`);
  console.log("====================================");
});
