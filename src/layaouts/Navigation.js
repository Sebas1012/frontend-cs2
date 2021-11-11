import React from 'react'
import { Navbar, NavbarBrand, NavDropdown, NavLink } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'

export default function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <NavbarBrand>React Java</NavbarBrand>
            <NavbarCollapse id="main-menu">
                <Navbar>
                    <NavLink>Create Post</NavLink>
                    <NavLink>Crear Cuenta</NavLink>
                    <NavDropdown title="Test" id="menu-dropdown"></NavDropdown>
                </Navbar>
            </NavbarCollapse>
            
        </Navbar>
    )
}
