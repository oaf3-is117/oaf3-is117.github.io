import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../assets/image1.png';

function Home() {
  return (
    <Container fluid className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <div className="px-4">
            <h1>Search for new games!</h1>
            <p>
              Welcome to our game portal. Find the latest and most exciting games to play!
            </p>
            <p>
              <Link to="/search">
                <Button variant="primary fake-link">Get Started</Button>
              </Link>
            </p>
          </div>
        </Col>
        <Col md={6}>
          <img src={image1} alt="Game" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
