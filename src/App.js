import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import uuid from "react-uuid";


function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      name: "Philip",
      role: role,
      img: "/images/philip.jpg",
    },
    {
      name: "Mercy",
      role: "Developer",
      img: "/images/mercy.jpg",
    },
    {
      name: "Jane",
      role: "Partner",
      img: "/images/jane.jpg",
    },
    {
      name: "Grace",
      role: "Learner",
      img: "/images/forgrace.jpg",
    },
    {
      name: "Philip",
      role: role,
      img: "/images/philip.jpg",
    },
    {
      name: "Mercy",
      role: "Developer",
      img: "/images/mercy.jpg",
    },
    {
      name: "Jane",
      role: "Partner",
      img: "/images/jane.jpg",
    },
    {
      name: "Grace",
      role: "Learner",
      img: "/images/forgrace.jpg",
    },
  ]);

  const showEmployee = true;
  return (
    <div className="m-2">
      {showEmployee ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuid()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You can't view employees</p>
      )}
    </div>
  );
}

export default App;
