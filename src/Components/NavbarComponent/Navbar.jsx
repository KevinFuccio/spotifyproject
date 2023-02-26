import { Container, Row } from "react-bootstrap";
import logo from "../../assets/Spotify_Logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookOpen} from "@fortawesome/free-solid-svg-icons";
import './Navbar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container>
      <Row>
        <div className="col-2">
          <nav
            className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
            id="sidebar"
          >
            <div className="nav-container">
              <Link to='/' className="navbar-brand">
                <img
                  src={logo}
                  alt="Spotify_Logo"
                  width="131"
                  height="40"
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul>
                    <li>
                      <a className="nav-item nav-link" href="index.html">
                      <FontAwesomeIcon icon={faHome} /> Home
                      </a>
                    </li>
                    <li>
                      <a className="nav-item nav-link" href="#">
                      <FontAwesomeIcon icon={faBookOpen} /> Your
                        Library
                      </a>
                    </li>
                    <li>
                      <div className="input-group mt-3">
                        <input
                          type="text"
                          className="form-control mb-2"
                          id="searchField"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div
                          className="input-group-append"
                          style={{marginBottom: "4%"}}
                        >
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            type="button"
                            id="button-addon1"
                            
                          >
                            GO
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="nav-btn">
              <button className="btn signup-btn" type="button">
                Sign Up
              </button>
              <button className="btn login-btn" type="button">
                Login
              </button>  
            <div>
                <a href="#">Cookie Policy </a>|<a href="#"> Privacy</a>
            </div>
            </div>
          </nav>
        </div>
      </Row>
    </Container>
  );
};
export default NavBar