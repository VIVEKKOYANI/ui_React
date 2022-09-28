import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import imageda from './download.jpg';
import profile1 from './profile.png';
import profile2 from './profile.png';
import profile3 from './profile.png';
import profile4 from './profile.png';
function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 700;
  return (
    <Container>
      <Row>
        <Col>
          <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto my-2 my-lg-0">
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                  <Nav.Link eventKey={2} href="#memes">
                    Account
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <Row style={{ marginTop: '10px'}}>
        <Col sm={12} md={6}>
          <>
            <h1>BUY and Sell with Peace of Mind</h1>
            <h5>For Creators shoppers, crypto defi natives, one platform for all.At Africa's First NFT Marketplace</h5>
            <div class="sm-12 text-center">
              <Button>Start Now</Button>
              <Button style={{ marginLeft: '10px'}}>Explore</Button>
            </div>
            {width > breakpoint &&
            <Row style={{ marginTop: '10px'}}>
              <Col>
                <Image src={profile1} style={{ height: '40px' }} roundedCircle />
                <Image src={profile2} style={{ height: '40px' }} roundedCircle />
                <Image src={profile3} style={{ height: '40px' }} roundedCircle />
                <Image src={profile4} style={{ height: '40px' }} roundedCircle /></Col>
              <Col>
                <ul>
                  <li>250k + people use Hashgreed</li>
                </ul>
              </Col>
            </Row>}
          </>
        </Col>
        <Col sm={12} md={6}>
          <img src={imageda} height={300} alt='sss' />
        </Col>
      </Row>
      <Row style={{ marginTop: '10px'}}>
        <Col sm></Col>
        <Col sm><h6>Follow These Steps To Use Our Application</h6></Col>
        <Col sm> </Col>
      </Row>
      <Row style={{ marginTop: '10px'}}>
        <Col sm><Image  src={profile1} responsive /></Col>
        <Col sm><Image  src={profile1} responsive /></Col>
        <Col sm><Image  src={profile1} responsive /></Col>
      </Row>
      <Row style={{ marginTop: '10px'}}>
        <Col></Col>
        <Col><Button>Watch</Button></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
