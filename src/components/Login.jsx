import React, { useState, useContext } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import NavBar from "./NavBar";

const Login = () => {
    const [username, setUserName] = useState("");
    
    // grab setUser from our context
    // setUser is the function that will let us modify our global user state
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        // prevents refresh
        event.preventDefault(); 

        // .setItem - saves our data to web storage
        // need to save items as key value pairs
        // values need to be saved as strings, so if you are saving an object type for example, make sure you 
        //use JSON.stringify
        sessionStorage.setItem('user', JSON.stringify({name: username, isLoggedIn: true}))


        // update user context
        setUser({ name: username, isLoggedIn: true })

        //navigate back to our home page
        navigate("/")

    }


    return (
        <Container fluid>
            <NavBar />
            <Row>
                <Col>
                <Form className="w-100 p-4 border rounded mt-5" onSubmit={handleSubmit}>
                    <FloatingLabel controlId="userName" label="Enter Username">
                    <Form.Control
                        autoComplete="off"
                        type="text"
                        value={username}
                        placeholder="Enter username"
                        onChange={(event) => setUserName(event.target.value)}
                    />
                    </FloatingLabel>
                    <Button variant="primary" type="submit" className="mt-4">
                    Login
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
