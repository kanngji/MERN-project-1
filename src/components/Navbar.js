import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function Navbar() {
  return (
    <>
      <Nav
        className="justify-content-center"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Beverage</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Event</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Board</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Store</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
