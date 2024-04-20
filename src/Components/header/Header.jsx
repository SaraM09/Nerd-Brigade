import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import NavbarDropdown from './Components/navbar/NavbarDropdown';

const Header = () => {
    return (
        <Nav className="navbar-header">
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/">Homepage</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/cart">Cart</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/payment">Payment</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/products">Products</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/user">User Form</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/technician">Technician Form</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/booking">Booking Form</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
};

export default Header;