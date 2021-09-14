import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { Link } from "react-router-dom";
import Foto from '../../assets/images/photo.jpg';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar className="bg-primary navbar-dark" expand="md" id="sideNav">
                <NavbarBrand href="/">
                    <img src={Foto} alt="Logo" className="img-fluid img-profile rounded-circle mx-auto mb-2" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to={`/about-us`} className="nav-link">
                                About
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to={`/experience`} className="nav-link">
                                Experience
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to={`/education`} className="nav-link">
                                Education
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to={`/skill`} className="nav-link">
                                Skills
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to={`/interests`} className="nav-link">
                                Interests
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to={`/awards`} className="nav-link">
                                Awards
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation
