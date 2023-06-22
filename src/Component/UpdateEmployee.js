import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function AddEmployee() {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Select Option");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState();
  const [error, setError] = useState(null);
  const Navigate = useNavigate("");
  const params = useParams();

  const fetchForPreFill = async () => {
    let res = await fetch(`http://localhost:8080/getemp/${params.id}`);
    res = await res.json();

    setId(res.id);
    setName(res.name);
    setGender(res.gender);
    setEmail(res.email);
    setMobile(res.mobile);
    setDepartment(res.department);
    setSalary(res.salary);
  };

  useEffect(() => {
    fetchForPreFill();
  }, []);

  const collectProductInfo = async (e) => {
    e.preventDefault();
    let data = {
      id: id,
      name: name,
      gender: gender,
      email: email,
      mobile: mobile,
      department: department,
      salary: salary,
    };
    try {
      let res = await fetch("http://localhost:8080/add_employee", {
        headers: {
          Action: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res.status !== 200) {
        setError(res.statusText);
      } else {
        Navigate("/");
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div
            className="card text-white mt-5 mb-5"
            style={{ backgroundColor: "darkblue" }}
          >
            {error ? (
              <div className="alert alert-danger" role="alert">
                <strong>Something went wrong! Please try again</strong>
              </div>
            ) : null}
            <div className="card-title mt-3">
              <h1>Update Employee</h1>
            </div>
            <div className="card-body mr-4 ml-4">
              <form onSubmit={collectProductInfo}>
                <div className="form-group row">
                  <label htmlFor="name">Employee Name</label>
                  <input
                    type="text"
                    value={name}
                    className="form-control"
                    id="name"
                    required
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Employee Name"
                  />
                </div>
                <div className="form-group row">
                  <label htmlFor="gender">Gender</label>
                  <select
                    required
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="form-control"
                    id="gender"
                  >
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group row">
                  <label htmlFor="email">Employee Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter Employee Email"
                  />
                </div>
                <div className="form-group row">
                  <label htmlFor="mobile">Employee Mobile No.</label>
                  <input
                    type="text"
                    onChange={(e) => setMobile(e.target.value)}
                    className="form-control"
                    value={mobile}
                    required
                    id="mobile"
                    name="mobile"
                    placeholder="Enter Employee Mobile No."
                  />
                </div>
                <div className="form-group row">
                  <label htmlFor="department">Employee Department</label>
                  <input
                    type="text"
                    className="form-control"
                    id="department"
                    required
                    onChange={(e) => setDepartment(e.target.value)}
                    name="department"
                    value={department}
                    placeholder="Enter Employee Department"
                  />
                </div>
                <div className="form-group row">
                  <label htmlFor="salary">Employee Salary</label>
                  <input
                    type="number"
                    className="form-control"
                    id="salary"
                    name="salary"
                    onChange={(e) => setSalary(e.target.value)}
                    value={salary}
                    placeholder="Enter Employee Salary"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-success btn-lg text-white mt-3"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
