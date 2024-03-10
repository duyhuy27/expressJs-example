import express from "express";
import { body, validationResult } from "express-validator";
import { userController, studentController } from "../controllers/index.js";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Get user");
});
route.get("/:id", userController.getDetailsUser);
route.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  userController.login
);

route.post("/register", userController.register);

export default route;
