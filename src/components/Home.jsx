import { useContext } from "react";
import { Container } from "react-bootstrap";
import UserContext from "../context/UserContext";
import NavBar from "./NavBar";
import MovieData from "./MovieData";

const Home = () => {
  // user = the data we're trying access   calling from UserContext
  // our useContext hook takes in the context we're trying to access our state from
  // in this case, we want to access our user state from our UserContext
  const { user } = useContext(UserContext);

  return (
    <Container fluid>
      <NavBar />
      
      <Container className="p-3">
        {
            user.isLoggedIn ? (
                <>
                <h1>Welcome {user.name}</h1>
                <p>You are now logged in</p>
                <h3>Random recommended movie: 
                </h3>
                <MovieData />
                </>
            ) : (
                <>
                <h1>Please login</h1>
                </>
            )
        }
        
      </Container>
      {/* <p>You are now {user.isLoggedIn ? 'logged in' : 'logged out' }</p> */}
    </Container>
  );
};

export default Home;
