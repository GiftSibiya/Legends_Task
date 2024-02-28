import express from "express";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (req, res) => {
  const user = new user({
    fullName: req.body.fullName,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
  }).save();
});
