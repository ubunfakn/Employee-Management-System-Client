import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeHome from "./Component/EmployeeHome";
import Navbar from "./Component/Common/Navbar";
import Footer from "./Component/Common/Footer";
import AddEmployee from "./Component/AddEmployee";
import UpdateEmployee from "./Component/UpdateEmployee";
import Page4O4 from "./Component/Page4O4";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeeHome />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/update/:id" element={<UpdateEmployee />} />
          <Route path="*" element={<Page4O4 />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
