import React, { Component } from 'react'
import { Navbar,Nav } from 'react-bootstrap'
export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">

                    <Navbar.Brand href="#home">DrinkApp</Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/favorite">Favorite Drink</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
            
        )
    }
}

export default Header
