import Dropdown from "react-bootstrap/Dropdown";

function DropdownFilter() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="outline-purple-700"
        className="bg-purple-200 hover:bg-purple-700 hover:text-white h-full"
        id="dropdown-basic"
      >
        Select Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Location</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Industry</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Recent Jobs</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownFilter;
