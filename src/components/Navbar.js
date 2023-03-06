import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BasicExample(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' aria-current='page' to="/">Home</Link>
            <Link className='nav-link' to="/about">About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

BasicExample.propTypes = {title : PropTypes.string.isRequired}

// BasicExample.defaultProps = {
//     title : 'Set title here'
// };
 
export default BasicExample;
