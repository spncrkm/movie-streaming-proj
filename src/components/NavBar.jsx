import React, { useContext } from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";


const NavBar = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();


    return (
        <Navbar
        expand="lg"
        className="bg-body-tertiary d-flex flex-row align-items-center justify-content-between px-3"
        >
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="d-flex flex-row align-items-center justify-content-between">
            <h6 className="mx-3 mt-2">User: {user.name}</h6>
            <Button variant="outline-success" onClick={() => navigate("/login")}>
                Login
            </Button>
        </Nav>
        </Navbar>
    );
};

export default NavBar;
