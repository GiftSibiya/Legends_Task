import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
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

const taskModel = mongoose.model("tasks", taskSchema);

export default taskModel;
