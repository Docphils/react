import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("dev");
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
            <Employee
              name="Philip"
              role="Teacher"
              img="/images/IMG-20230623-WA0009.jpg"
            />
            <Employee name="Mercy" role={role} img="/mercy.jpg" />
            <Employee name="Jane" img="/jane.jpg" />
            <Employee name="Grace" img="/forgrace.jpg" />
            <Employee
              name="Philip"
              role="Teacher"
              img="/images/IMG-20230623-WA0009.jpg"
            />
            <Employee name="Mercy" role={role} img="/mercy.jpg" />
            <Employee name="Jane" img="/jane.jpg" />
            <Employee name="Grace" img="/forgrace.jpg" />
          </div>
        </>
      ) : (
        <p>You can't view employees</p>
      )}
    </div>
  );
}

export default App;
