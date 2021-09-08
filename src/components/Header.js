import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar expand="md">
            <NavbarBrand href="/">QTemu</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Create Meetup</NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>Explore</NavbarText>
            </Collapse>
        </Navbar>
    );
}

export default App;
