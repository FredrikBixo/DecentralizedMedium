import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import Logo from "../../assets/images/icon.png";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        {/* <Link to="/"> */}
        <Image src={Logo} width={70} />
        {/* </Link> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#articles">Articles</Nav.Link>
          <Nav.Link href="#link">Profile</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-secondary">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

NavBar.propTypes = {};

export default NavBar;
