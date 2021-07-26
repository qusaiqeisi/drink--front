import React, { Component } from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">

                    <Navbar.Brand href="#home">DrinkApp</Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/drinkFav">FaverDrink</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
            
        )
    }
}

export default Header
