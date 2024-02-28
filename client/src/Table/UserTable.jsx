import React, { useState } from "react";
import Table from "../Component/Table";
import AddTask from "../Component/AddTask";
import UpdatedTask from "../Component/UpdatedTask";
import DeleteTask from "../Component/DeleteTask";
import axios from "axios";
import toast from "react-hot-toast";

export default function UserTable() {
  const [userId, setUserId] = useState();
  const [updatedTaskId, setUpdatedTaskId] = useState();
  console.log(updatedTaskId);
  const [value, setValue] = useState({
    taskName: "",
    taskDesc: "",
    taskStatus: "",
    taskDue: "",
  });
  const deletTask = (userid) => {
    setUserId(userid);
  };
  const handleUserDelet = async () => {
    try {
      const DeleteTask = await axios.delete(
        `http://localhost:4000/api/delete/${userId}`
      );
      const response = DeleteTask.data;
      if (response.success) {
        toast.success(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlechange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const UpadteUserData = (Updatedid) => {
    setUpdatedTaskId(Updatedid);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const UpdatedTask = await axios.put(
        `http://localhost:4000/api/update/${updatedTaskId}`,
        value
      );
      const response = UpdatedTask.data;

      if (response.success) {
        toast.success(response.message);
      }
      // console.log(response)
    } catch (error) {
      console.log(error);
    }
    // console.log(value)
  };
  return (
    <>
      <Table DeleteTask={deletTask} UpdatedTask={UpadteUserData}></Table>

      <AddTask></AddTask>
      <UpdatedTask
        handleOnSubmit={handleOnSubmit}
        value={value}
        handlechange={handlechange}
      ></UpdatedTask>
      <DeleteTask handleUserDelet={handleUserDelet}></DeleteTask>
    </>
  );
}
