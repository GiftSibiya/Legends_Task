/// IMPORT DEPENDENCIES ///

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routers from "./routes/routes.js";
import dbCon from "./utlis/db.js";

///--///
const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
dbCon();

/// THIS WILL PREFIX THE ROUTES WITH /API. USE POSTMAN TO TEST
app.use("/api", routers);

app.listen(process.env.PORT, () => {
  console.log(`server is running ${process.env.PORT}`);
});
