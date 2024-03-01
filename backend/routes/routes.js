/// IMPORT DEPENDENCIES ///
import express from "express";
import {
  CreateTask,
  GetTask,
  UpdateTask,
  DeleteTask,
  CreateUser,
  GetUser,
  UpdateUser,
  DeleteUser,
  CheckUserExistence,
} from "../controllers/Controller.js";
/// -- ///

const routers = express.Router();

/// TASK ROUTES ///
routers.post("/create", CreateTask);
routers.get("/get", GetTask);
routers.put("/update/:id", UpdateTask);
routers.delete("/delete/:id", DeleteTask);

/// USER ROUTES ///
routers.post("/CreateUser", CreateUser);
routers.get("/GetUser", GetUser);
routers.put("/UpdateUser", UpdateUser);
routers.delete("/DeleteUser", DeleteUser);

routers.post("/checkUser", CheckUserExistence);

export default routers;
