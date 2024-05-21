import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';

const App = () => {
  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='#home' className='d-flex align-items-center'>
            <FontAwesomeIcon icon={faCloud} />
            <span className='ms-2'>
              <strong>Get in the Cloud</strong>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto d-flex align-items-center'>
              <Nav.Link href='#home' className='me-3'>
                Home
              </Nav.Link>
              <NavDropdown
                title='Projects'
                id='basic-nav-dropdown'
                className='me-3'
              >
                <NavDropdown.Item href='#action/3.1'>
                  Project 1
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Project 2
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Project 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#contact' className='me-3'>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Image src='src/assets/pexels-pixabay-53594.jpg' fluid />
    </>
  );
};

export default App;
