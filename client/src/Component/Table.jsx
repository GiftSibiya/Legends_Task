import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./Table.css";

import React, { useEffect, useState } from "react";

export default function Table({ DeleteTask, UpdatedTask }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function FeatchData() {
      try {
        const task = await axios.get("http://localhost:4000/api/get");
        const response = task.data;
        setData(response);
      } catch (error) {
        console.log(error);
      }
    }
    FeatchData();
  }, [data]);

  const exportToPDF = () => {
    const input = document.getElementById("table-container");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("table-export.pdf");
    });
  };

  return (
    <>
      <div className="container">
        <div className="col-sm-6">
          <button className="btn btn-primary" onClick={exportToPDF}>
            Export to PDF
          </button>
        </div>
        <div id="table-container" className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-1 task--header">
                <b>Tasks</b>
              </div>
              <div className="col-sm-2">
                <a
                  href="#"
                  className="task--add__btn"
                  data-bs-toggle="modal"
                  data-bs-target="#addEmployeeModal"
                >
                  <span className="task--add__txt">Add Task</span>
                </a>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Task Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Due date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.tasks?.map((elem, index) => {
                return (
                  <tr key={index}>
                    <td></td>
                    <td>{elem.taskName}</td>
                    <td>{elem.taskDesc}</td>
                    <td>{elem.taskStatus}</td>
                    <td>{new Date(elem.taskDue).toLocaleDateString()}</td>
                    <td>
                      <a
                        href="#"
                        className="edit cursor-pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#editEmployeeModal"
                        onClick={() => UpdatedTask(elem._id)}
                      >
                        <i
                          className="material-icons"
                          data-bs-toggle="tooltip"
                          title="Edit"
                        >
                          &#xE254;
                        </i>
                      </a>
                      <a
                        href="#"
                        className="delete cursor-pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteEmployeeModal"
                        onClick={() => DeleteTask(elem._id)}
                      >
                        <i
                          className="material-icons"
                          data-bs-toggle="tooltip"
                          title="delete"
                        >
                          &#xE872;
                        </i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
