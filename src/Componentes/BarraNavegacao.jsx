import React, { Component } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

class BarraNavegacao extends Component {
    render() {
        return (
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="/">Controle de Livros</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/">Página Inicial</Nav.Link>
                    <Nav.Link href="/livros">Listar Livros</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

export default BarraNavegacao;