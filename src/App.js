import './App.css';
import BarraNavegacao from './Componentes/BarraNavegacao';
import Footer from './Componentes/Footer';
import Home from './Componentes/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListaLivros from './Componentes/ListaLivros';
import CreateUpdateLivro from './Componentes/CreateUpdateLivro';

function App() {
  return (
    <div className="App">
      <Router>
        <BarraNavegacao />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/livros" component={ListaLivros}></Route>
          <Route path="/livro/:id" component={CreateUpdateLivro}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
