import React from "react";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './about/About';
import Work from './work/Work';
import Projects from './projects/Projects'
import Books from './books/Books'
import Articles from './articles/Articles'

export default class PortfolioNavbar extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <Router>
                        <Container>
                        <Navbar bg="#0C1115" variant="dark" expand="lg" sticky="top">

                            <Navbar.Brand href="#home">Rajat Kumar Gupta</Navbar.Brand>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />

                            <Navbar.Collapse id="basic-navbar-nav">

                                <Nav className="mr-auto">

                                    <Nav.Link href="/about">About</Nav.Link>

                                    <Nav.Link href="/work">Work</Nav.Link>

                                    {/* <Nav.Link href="/projects">Projects</Nav.Link> */}

                                    <Nav.Link href="/reads">Reads</Nav.Link>

                                    <Nav.Link href="/writes">Writes</Nav.Link>

                                    {/* <NavDropdown title="Misc" id="basic-nav-dropdown">

                                        <NavDropdown.Item href="#action/3.1">Events & Communities</NavDropdown.Item>

                                        <NavDropdown.Divider />

                                        <NavDropdown.Item href="#action/3.2">Achievements</NavDropdown.Item>

                                        <NavDropdown.Divider />

                                        <NavDropdown.Item href="#action/3.3">YouTube</NavDropdown.Item>

                                        <NavDropdown.Divider />

                                        <NavDropdown.Item href="#action/3.3">Speaker</NavDropdown.Item>

                                    </NavDropdown> */}

                                </Nav>

                            </Navbar.Collapse>

                        </Navbar>
                        </Container>
                        <br />
                        <Switch>
                            <Route exact path='/' component = {About}/>
                            <Route exact path='/about' component = {About}/>
                            <Route exact path='/work' component = {Work}/>
                            <Route exact path='/projects' component = {Projects}/>
                            <Route exact path='/reads' component = {Books}/>
                            <Route exact path='/writes' component = {Articles}/>
                        </Switch>
                    </Router>

                </div>
            </div>
        )
    }
}