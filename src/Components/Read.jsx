import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Read = () => {
  const [APIdata, setAPIdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://629b97b4656cea05fc3b6229.mockapi.io/FakeData")
      .then((response) => setAPIdata(response.data));
  }, []);

  const setData = (data) => {
    localStorage.setItem("id", data.id);
    localStorage.setItem("firstName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
  };

  return (
    <div>
      <Link to="/create">
        <Button className="m-5" style={{ textAlign: "center" }} variant="dark">
          Add Data
        </Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {APIdata.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>
                  <Link to="/update">
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Link>
                </td>
                <td>
                  <Link to="/">
                    <Button>Delete</Button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default Read;
