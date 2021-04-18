import React, { useContext } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from '../../../Images/logo.png';
import './TopNavbar.css';

const TopNavbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div style={{background:" #00acc1"}} className="fixed-top">
      <Navbar collapseOnSelect expand="lg"  className="navbar_main">
        <Navbar.Brand as={Link} to="/"><img src={logo} alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav className="right_nav">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About</Nav.Link>
            <Nav.Link as={Link} to="/contact-us">Contact</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            </Nav>

              {loggedInUser ? <Button variant="outline-danger" onClick={()=>setLoggedInUser(false)} >Sign out</Button> :
                  <Link to="/login"><button className="btn btn-outline-warning">Login</button> </Link>}

                  <Link className="nav-link text-warning">{loggedInUser.name || loggedInUser.email }</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
