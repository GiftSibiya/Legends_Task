/// IMPORT DEPENDENCIES ///
import express from "express";
import {
  create,
  get,
  Updated,
  Delete,
  getUser,
} from "../controllers/Controller.js";
/// -- ///

const routers = express.Router();

/// TASK ROUTES
routers.post("/create", create);
routers.get("/get", get);
routers.put("/update/:id", Updated);
routers.delete("/delete/:id", Delete);

/// USER ROUTES
routers.get("/user", getUser);

export default routers;
