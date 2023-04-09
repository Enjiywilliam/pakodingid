import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

const NavbarComp = () => {
    return (
         <div className="sticky-top">
            <Navbar className="bg-dark">
                <Container>
                <Navbar.Brand className="text-white">EnjiyMovies.</Navbar.Brand>
                <Nav>
               
                <Nav.Link className="text-white fw-bold">Tranding</Nav.Link>
                <Nav.Link className="text-white fw-bold">Super Hero</Nav.Link>
                
                </Nav>
                </Container>  
                </Navbar>
        </div>
 );
};


export default NavbarComp;