import React from 'react'
import { Navbar, NavbarBrand, NavDropdown, NavLink } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'

export default function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{ paddingLeft: 20 }}>
            <NavbarBrand>React Java</NavbarBrand>
            <NavbarCollapse id="main-menu">
                <Navbar>
                    <NavLink>Crear Post</NavLink>
                    <NavLink>Crear Cuenta</NavLink>
                    <NavDropdown title="Test" id="menu-dropdown">
                        <NavDropdown.Item href="">Opcion 1</NavDropdown.Item>
                        <NavDropdown.Item href="">Opcion 2</NavDropdown.Item>
                        <NavDropdown.Item href="">Opcion 3</NavDropdown.Item>
                    </NavDropdown>
                </Navbar>
            </NavbarCollapse>
        </Navbar>


        
    )
}
