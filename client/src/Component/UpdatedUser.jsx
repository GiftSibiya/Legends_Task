import React, { useState } from "react";

export default function UpdatedUser({ handleOnSubmit, value, handlechange }) {
  return (
    <>
      <div id="editEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleOnSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Update Task</h4>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    value={value.taskName}
                    name="taskName"
                    onChange={handlechange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    value={value.taskDesc}
                    name="taskDesc"
                    onChange={handlechange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <input
                    type="text"
                    value={value.taskStatus}
                    name="taskStatus"
                    onChange={handlechange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Due Date</label>

                  <input
                    type="text"
                    value={value.taskDue}
                    name="taskDue"
                    onChange={handlechange}
                    className="form-control"
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
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Update"
                  data-bs-dismiss="modal"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
