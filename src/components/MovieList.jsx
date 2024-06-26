import { useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../features/wishListSlice";

const MovieList = () => {
    // useSelector allows us to grab the current global state for whatever state we are keeping track of
    // "select" the state we need from redux
    // in this case, we need the wishList property from our wishList state
    const { wishList } = useSelector((state) => state.wishList);

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteItem(id))
    }


    return (
        <Container fluid>
            <NavBar />
            <Row className="p-3">
                {wishList.map((movie) => (
                    <Col key={movie.id} xs={12} sm={6} md={6} lg={3}>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={movie.poster_path} />
                            <Card.Body>
                                <Card.Title>{movie.original_title}</Card.Title>
                                <Card.Text>
                                    {movie.overview}
                                </Card.Text>
                                <Button onClick={() => handleDelete(movie.id)} variant="danger">
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MovieList;
