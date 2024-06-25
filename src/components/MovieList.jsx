import { useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

const MovieList = () => {
    // useSelector allows us to grab the current global state for whatever state we are keeping track of
    // "select" the data we need from redux
    const { wishList } = useSelector((state) => state.wishList);


    return (
        <Container fluid>
            <NavBar />
            <Row className="p-3">
                {wishList.map((movie) => {
                    <Col key={movie.id} xs={12} sm={6} md={4}>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={movie.poster_path} />
                            <Card.Body>
                                <Card.Title>{movie.original_title}</Card.Title>
                                <Card.Text>
                                    {movie.overview}
                                </Card.Text>
                                <Button variant="danger">
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        </Container>
    );
};

export default MovieList;
