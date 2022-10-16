import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function Navbar() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/exercises">Exercises</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/create">Create Exercise Log</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/user">Create User</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
