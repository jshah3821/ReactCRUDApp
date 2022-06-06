import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  let Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(FirstName, LastName);
    axios.post("https://629b97b4656cea05fc3b6229.mockapi.io/FakeData", {
      firstName: FirstName,
      lastName: LastName
    });
    setFirstName("");
    setLastName("");
    Navigate("/");
  };
  return (
    <div className="m-4 p-4" style={{ border: "solid" }}>
      <Form>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={FirstName}
          />
        </Form.Group>

        <Form.Group controlId="formBasicLastName">
          <Form.Label>LastName</Form.Label>
          <Form.Control
            type="LastName"
            placeholder="Enter LastName"
            onChange={(e) => setLastName(e.target.value)}
            value={LastName}
            name="LastName"
          />
        </Form.Group>
        <Button
          className="m-5"
          style={{ textAlign: "center" }}
          variant="dark"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Create;
