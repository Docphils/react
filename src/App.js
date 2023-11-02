import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
function App() {
  const [role, setRole] = useState("dev");
  const showEmployee = true;
  return (
    <div className="bg-blue-300">
      {showEmployee ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />

          <Employee name="Philip" role="Teacher" />
          <Employee name="Mercy" role={role} />
          <Employee name="Jane" />
          <Employee name="Grace" />
        </>
      ) : (
        <p>You can't view employees</p>
      )}
    </div>
  );
}

export default App;
