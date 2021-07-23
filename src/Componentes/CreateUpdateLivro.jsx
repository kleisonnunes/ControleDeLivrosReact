import React, { Component } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import LivrosServicos from '../Servicos/LivrosServicos';

class CreateUpdateLivro extends Component {
    constructor (props){
        super(props);
        this.state = {
            id_livro : this.props.match.params.id,
            nome:"",
            autor:"",
            editora:""
        }
        
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeAutorHandler = this.changeAutorHandler.bind(this);
        this.changeEditoraHandler = this.changeEditoraHandler.bind(this);
        this.salvarLivro = this.salvarLivro.bind(this);

    }

    componentDidMount(){
        if(this.state.id_livro == "_add"){
            return false
        }else{
            return LivrosServicos.getLivroById(this.state.id_livro).then(
                (res) => {
                    let livro = res.data;
                    this.setState({
                        nome : livro.nome,
                        autor : livro.autor,
                        editora : livro.editora
                    });
                });
        }
    }

    changeNomeHandler(event){
        this.setState({nome : event.target.value})
    }

    changeAutorHandler(event){
        this.setState({autor : event.target.value})
    }

    changeEditoraHandler(event){
        this.setState({editora : event.target.value})
    }

    cancelar(){
        this.props.history.push("/livros");
    }

    salvarLivro(){
        let livro = {
            nome : this.state.nome,
            autor : this.state.autor,
            editora : this.state.editora
        }

        if(this.state.id_livro == "_add"){
            LivrosServicos.createLivro(livro).then(
                (res) => {
                    alert(res.data);
                }
            )
        }else{
            livro.id_livro = this.state.id_livro
            LivrosServicos.editLivro(livro).then(
                (res) => {console.log(res.data)}
            );
        }
        this.props.history.push("/livros");
    }

    render() {
        return (
            <Container>
                <Row className="Justify-content-md-center">
                    <h1>Cadastro de Livros</h1>
                </Row>

                <Form>
                    <Form.Group controlId="formNome">
                        <Form.Control type="text" placeholder="Nome" value={this.state.nome} onChange={this.changeNomeHandler}/>
                        <Form.Text className="text-muted">
                        <br></br>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formAutor">
                        <Form.Control type="text" placeholder="Autor" value={this.state.autor} onChange={this.changeAutorHandler}/>
                        <Form.Text className="text-muted">
                        <br></br>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formEditora">
                        <Form.Control type="text" placeholder="Editora" value={this.state.editora} onChange={this.changeEditoraHandler}/>
                        <Form.Text className="text-muted">
                        <br></br>
                        </Form.Text>
                    </Form.Group>

                <Row className="float-right">
                    <Button variant="success" style={{ margin: "10px 0px 10px 0px" }} className="btnSubmit"
                    onClick={this.salvarLivro}>
                        Inserir
                    </Button>
                    <Button variant="warning" style={{ margin: "10px" }} onClick={this.cancelar.bind(this)} >
                        Cancelar
                    </Button>
                </Row>
                </Form>
            </Container>
        );
    }
}

export default CreateUpdateLivro;