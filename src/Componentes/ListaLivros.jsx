import React, { Component } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import LivrosServicos from '../Servicos/LivrosServicos';
import axios from "axios";

class ListaLivros extends Component {
    
    constructor (props){
        super(props);
        this.state = {
            livro: []
        }
        
        this.voltar = this.voltar.bind(this);
        this.novolivro = this.novolivro.bind(this);
        this.editar = this.editar.bind(this);
        this.excluir = this.excluir.bind(this);
    }

    componentDidMount(){
        this.getLivros();
    }
    
    getLivros(){
        LivrosServicos.getLivro().then(
        (resposta) =>
            this.setState({livro:resposta.data})
        );
    }

    voltar(){
        this.props.history.push("/");
    }

    novolivro(){
        this.props.history.push("/livro/_add")
    }

    editar(id_livro){
        this.props.history.push("/livro/"+id_livro)
    }

    excluir(id_livro){
        LivrosServicos.deleteLivro(id_livro).then(
            res => {
                alert(res.data);
                this.getLivros();
            });
    }


    render() {
        return (
            <Container>
                <Row>
                    <h1>Livros</h1>
                </Row>
                <Row>

                </Row>

                <Row>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>
                                    Nome
                                </th>
                                <th>
                                    Autor
                                </th>
                                <th>
                                    Editora
                                </th>
                                <th>
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.livro.map(
                                    livro =>
                                    <tr key= {livro.id_livro}>
                                        <td>
                                            {livro.nome}
                                        </td>
                                        <td>
                                            {livro.autor}
                                        </td>
                                        <td>
                                            {livro.editora}
                                        </td>
                                        <td>
                                            <Button variant="warning" onClick={() => this.editar(livro.id_livro)}>Editar</Button>
                                            <Button variant="danger" onClick={() => this.excluir(livro.id_livro)}>Excluir</Button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Row>
                <Row>
                    <Col>
                        <Button className="float-left" variant="link" onClick={this.voltar.bind(this)}>voltar</Button>
                    </Col>
                    <Col>
                        <Button className="float-right" variant="secondary" onClick={this.novolivro.bind(this)}>Novo livro</Button>
                    </Col>
                </Row>                
            </Container>
        );
    }
}

export default ListaLivros;