import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";


const NavbarDropdown = () => {
    return (
       <Navbar className='navbar' fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">Nerd Bragade</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link as={Link} to="/Homepage">Homepage</Nav.Link> */}
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/">Homepage</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/cart">Cart</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/payment">Payment</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products">Products</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/user">User Form</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/technician">Technician Form</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/booking">Booking Form</NavDropdown.Item>
          </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

                    
            )
}

export default NavbarDropdown



