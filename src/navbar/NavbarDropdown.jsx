import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";


const NavbarDropdown = () => {
    return (
       <Navbar className='navbar' fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">Nerd Bragide</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Homepage">Homepage</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="TransactionList">Transaction List</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="CategoryList">Category List</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="Budget">Budget</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="ExpenseChart">Expense Chart</NavDropdown.Item>
          </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

                    
            )
}

export default NavbarDropdown



