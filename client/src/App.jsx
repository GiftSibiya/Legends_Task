import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Corrected import path for Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Corrected import path for Bootstrap JS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TaskTable from "./Table/TaskTable";

import { Toaster } from "react-hot-toast";
import Login from "./screens/Login";

export default function App() {
  return (
    <>
      <Toaster></Toaster>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<TaskTable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
