import React, { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AddTask() {
  const [value, setValue] = useState({
    taskName: "",
    taskDesc: "",
    taskStatus: "",
    taskDue: "",
  });
  const handleOnchange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const CloseRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const addTask = await axios.post(
        "http://localhost:4000/api/create",
        value
      );
      const response = addTask.data;
      if (response.success) {
        toast.success(response.Message);
        CloseRef.current.click();
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div id="addEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Add Task</h4>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-hidden="true"
                  ref={CloseRef}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Task Name</label>
                  <input
                    type="text"
                    value={value.taskName}
                    name="taskName"
                    onChange={handleOnchange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Description </label>
                  <input
                    type="text"
                    value={value.taskDesc}
                    name="taskDesc"
                    onChange={handleOnchange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <input
                    type="text"
                    value={value.taskStatus}
                    name="taskStatus"
                    onChange={handleOnchange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Due Date</label>
                  <input
                    type="Date"
                    value={value.taskDue}
                    name="taskDue"
                    onChange={handleOnchange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-bs-dismiss="modal"
                  value="Cancel"
                />
                <input type="submit" className="btn btn-primary" value="Add" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
