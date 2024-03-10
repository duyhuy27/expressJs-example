import express from "express";
import { userController, studentController } from "../controllers/index.js";

const route = express.Router();

route.get("/", studentController.getAllStudent);

route.get("/:id", studentController.getStudentById);

route.post("/insert", studentController.insertStudent);

route.put("/update/:id", studentController.updateStudent);

export default route;
