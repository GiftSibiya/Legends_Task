import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import React, { useEffect, useState } from "react";

export default function Table({ Deletuser, UpdatedUser }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function FeatchData() {
      try {
        const user = await axios.get("http://localhost:4000/api/get");
        const response = user.data;
        // console.log(response.users)
        setData(response);
        // console.log(response.data.users.etaskStatus, 'taskStatus')
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
              <div className="col-sm-6">
                <h2>
                  Manage <b>Tasks</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <a
                  href="#"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#addEmployeeModal"
                >
                  <i className="material-icons">&#xE147;</i>{" "}
                  <span>Add New Task</span>
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
              {data.users?.map((elem, index) => {
                return (
                  <tr key={index}>
                    <td></td>
                    <td>{elem.taskName}</td>
                    <td>{elem.taskDesc}</td>
                    <td>{elem.taskStatus}</td>
                    <td>{elem.taskDue}</td>
                    <td>
                      <a
                        href="#"
                        className="edit cursor-pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#editEmployeeModal"
                        onClick={() => UpdatedUser(elem._id)}
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
                        onClick={() => Deletuser(elem._id)}
                      >
                        <i
                          className="material-icons"
                          data-bs-toggle="tooltip"
                          title="delete"
                        >
                          &#xE872;
                        </i>
                      </a>
                      {/* <a className="delete" data-bas-toggle='modal' data-bs-target='#deleteEmployeeModal'><i className="material-icons" data-bs-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
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
