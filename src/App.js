import "./index.css";
import Employee from "./components/Employee";
import AddEmployee from "./components/AddEmployee";
import { useState } from "react";
import uuid from "react-uuid";
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Philip",
      role: "Coach",
      img: "/images/philip.jpg",
    },
    {
      id: 2,
      name: "Mercy",
      role: "Developer",
      img: "/images/mercy.jpg",
    },
    {
      id: 3,
      name: "Jane",
      role: "Partner",
      img: "/images/jane.jpg",
    },
    {
      id: 4,
      name: "Grace",
      role: "Learner",
      img: "/images/forgrace.jpg",
    },
    {
      id: 5,
      name: "Philip",
      role: "Teacher",
      img: "/images/philip.jpg",
    },
    {
      id: 6,
      name: "Mercy",
      role: "Developer",
      img: "/images/mercy.jpg",
    },
    {
      id: 7,
      name: "Jane",
      role: "Partner",
      img: "/images/jane.jpg",
    },
    {
      id: 8,
      name: "Grace",
      role: "Learner",
      img: "/images/forgrace.jpg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuid(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }
  const showEmployee = true;
  return (
    <div className=" App min-h-screen m-2 bg-gray-300">
      <Header />
      <Banner />
      {showEmployee ? (
        <>
          <div className=" flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  // key={uuid()}
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You can't view employees</p>
      )}
    </div>
  );
}

export default App;
