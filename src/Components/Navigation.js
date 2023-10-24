import { Navbar, Container, Form, Button, Nav, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { authenticateAction } from "../redux/action/authenticateAction";
import { StoreContext } from "../ThemeContext";
import { useContext } from "react";

function Navigation({ black }) {
  const authenticate = useSelector((state) => state.auth.authenticate);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { keyword } = useContext(StoreContext);
  let word = "";
  function getKeyWord(e) {
    word = e.target.value;
  }
  function searchMovie(e) {
    e.preventDefault();
    keyword[1](word);
    navigate("/movies");
  }
  const goToLogin = () => {
    navigate("/login");
    console.log("로긘 값", authenticate);
  };
  const goMovieList = () => {
    navigate("/movies");
  };
  const LogOut = () => {
    navigate("/");
    dispatch({ type: "LOGOUT", payload: { authenticate } });
  };

  return (
    <Navbar expand="lg" className={black ? "black" : ""}>
      <Container fluid>
        <Navbar.Brand href="#">
          <Link to="/">
            <img
              width={100}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <div onClick={goMovieList} className="nav-itme">
              Movies
            </div>

            <div className="nav-itme" onClick={authenticate == true ? LogOut : goToLogin}>
              {authenticate == true ? "LogOut" : "Login"}
            </div>
          </Nav>

          <Form className="d-flex" onSubmit={(e) => searchMovie(e)}>
            <Form.Control
              onChange={(event) => getKeyWord(event)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button type="submit" variant="danger">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
