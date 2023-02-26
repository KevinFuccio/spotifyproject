import Next from "../../assets/playerbuttons/Next.png";
import Play from "../../assets/playerbuttons/Play.png";
import Previous from "../../assets/playerbuttons/Previous.png";
import Repeat from "../../assets/playerbuttons/Repeat.png";
import Shuffle from "../../assets/playerbuttons/Shuffle.png";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../NavPlayerComponent/NavPlayer.css";
const NavPlayer = () => {
  const song = useSelector((state) => state.songs.songs);
  console.log(song);
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col lg={1} className="offset-lg-2">
          {song ? (
            <>
            <Col className="d-flex mt-3">
              <img
                src={song.album.cover}
                alt={""}
                style={{ height: "50px" }}
              />
              
            </Col>
            <Col><p className="text-white">{song.title}</p></Col>
            </>
          ) : (
            <Col className="d-none">
              <img src="" alt="" />
              <p>a</p>
            </Col>
          )}
          
        </Col>
        <Col lg={8}>
          <Row>
            <Col
              xs={6}
              md={4}
              lg={2}
              className="offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
            >
              <Row>
                <Link href="#">
                  <img src={Shuffle} alt="shuffle" />
                </Link>
                <Link href="#">
                  <img src={Previous} alt="shuffle" />
                </Link>
                <Link href="#">
                  <img src={Play} alt="shuffle" />
                </Link>
                <Link href="#">
                  <img src={Next} alt="shuffle" />
                </Link>
                <Link href="#">
                  <img src={Repeat} alt="shuffle" />
                </Link>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col xs={8} md={6}>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default NavPlayer;
