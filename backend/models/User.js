import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
    taskDesc: {
      type: String,
      required: true,
    },
    taskStatus: {
      type: String,
      required: true,
    },
    taskDue: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const usermodel = mongoose.model("user", userSchema);

export default usermodel;
