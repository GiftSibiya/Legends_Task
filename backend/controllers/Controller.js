import taskModel from "../models/TaskModel.js";
const create = async (req, res) => {
  try {
    const { taskName, taskDesc, taskStatus, taskDue } = req.body;
    const NewTask = new taskModel({
      taskName,
      taskDesc,
      taskStatus,
      taskDue,
    });
    await NewTask.save();

    res
      .status(200)
      .json({ success: true, message: "Task Created Successfully.", NewTask });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Interl server eror" });
  }
};

/// GET TASKS ///
const get = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    if (!tasks) {
      return res.status(404).json({ success: false });
    }

    res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false });
  }
};

/// UPDATE TASK ///
const Updated = async (req, res) => {
  try {
    const taskId = req.params.id;

    const updateTask = await taskModel.findByIdAndUpdate(taskId, req.body, {
      new: true,
    });
    if (!updateTask) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }
    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      updateTask,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// DELETE TASK
const Delete = async (req, res) => {
  try {
    const taskId = req.params.id;
    const deleteTask = await taskModel.findByIdAndDelete(taskId);
    if (!deleteTask) {
      return res
        .status(404)
        .json({ success: false, message: "Task Not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Task Deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { create, get, Updated, Delete };
