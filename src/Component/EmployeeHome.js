import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EmployeeHome() {
  const [employee, setEmployee] = useState([]);
  const [error, setError] = useState(null);
  const Navigate = useNavigate("");

  const deleteData = async (id) => {
    let res = await fetch(`http://localhost:8080/delete/${id}`, {
      method: "DELETE",
    }).catch((error)=>{
      console.log(error);
    })
    if (!res) {
      setError("Error in Deleting data! Please try again after sometime");
    }
  };

  const updateData = async (id) => {
    Navigate(`/update/${id}`);
  };

  useEffect(function () {
    fetch("http://localhost:8080/all").then((res) => {
      res.json().then((result) => {
        setEmployee(result);
      }).catch((error)=>{
        console.log(error);
      })
    }).catch((error)=>{
      console.log(error);
    })
  });

  return (
    <div className="col-md-10 offset-md-1 mt-4">
      <h1 className="text-center mt-5">Employees List</h1>
      <div className="table-responsive">
        {error ? (
          <div className="alert alert-danger" role="alert">
            <strong>Something went wrong! Please try again</strong>
          </div>
        ) : null}
        <table className="table table-dark mt-4">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((emp, i) => (
              <tr key={i}>
                <td>
                  EMS{emp.mobile.slice(7)}
                  {emp.department.charAt(0)}
                  {emp.id}
                </td>
                <td>{emp.name}</td>
                <td>{emp.gender}</td>
                <td>{emp.email}</td>
                <td>{emp.mobile}</td>
                <td>{emp.department}</td>
                <td>{emp.salary}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => deleteData(emp.id)}
                    className="btn btn-primary mr-2"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    type="button"
                    onClick={() => updateData(emp.id)}
                    className="mr-2 btn btn-danger"
                  >
                    <i className="fa-solid fa-pen-nib"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
