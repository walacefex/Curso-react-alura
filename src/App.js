import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

//components
import Header  from './Header';
import Tabela  from './Tabela';
import Form    from './Formulario';
import PopUp   from './Popup';


class App extends Component {

  state = {
    autores: [
      {
        nome:  'Telles',
        livro: 'React',
        preco: '1000'
      },
      {
        nome:  'Walace',
        livro: 'Angular',
        preco: '2000'
      },
      {
        nome:  'Jonatas',
        livro: 'Flutter',
        preco: '3000'
      },
      {
        nome:  'Lucas',
        livro: 'DevOps',
        preco: '4000'
      }
    ],
  };

  removeAutor = index =>{
    const { autores } = this.state;

    this.setState(
      {
        autores: autores.filter((autor, posAtual) =>{
          return posAtual !== index;
        }),
      }
    );
    PopUp.exibeMensagem("error", "Autor removido com sucesso")
  }

  escutadorDeSubmit = autor =>{
    this.setState({ autores: [...this.state.autores, autor]})
    PopUp.exibeMensagem("success", "Autor Adicionado com sucesso")
  }
   
  render(){
    return (
      <Fragment>
        <Header />
        <section className="container mb-1">
          <h1>Casa do Código</h1>
        <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor }/>
        <Form escutadorDeSubmit = {this.escutadorDeSubmit}  />
        </section>
       </Fragment>
    );
  }
 
}

export default App;
