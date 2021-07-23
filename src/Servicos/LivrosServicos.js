import axios from "axios";

const urlbase = "http://localhost:8080/livro";
const urllivro = "http://localhost:8080/livro/all";

class LivrosServicos{
    getLivro(){
        return axios.get(urlbase+"/all");
    }

    createLivro(livro){
        return axios.post(urlbase+"/addlivro",livro);
    }

    getLivroById(id){
        return axios.get(urlbase+"/locate_book/"+id);
    }

    editLivro(livro){
        return axios.put(urlbase+"/update_livro/"+livro.id_livro,livro);
    }

    deleteLivro(id_livro){
        return axios.delete(urlbase+"/delete_livro/"+id_livro);
    }

}

export default new LivrosServicos();