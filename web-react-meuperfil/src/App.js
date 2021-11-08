import React, { Component } from 'react';
import './App.css';

 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: 'Dados pessoais'
    };
 
    this.entrar = this.entrar.bind(this);
  }
  
  
  entrar(){
    // this.state.nome = 'Joseffe Oliveira'
    this.setState({
      idade: <b>Idade</b>,
      idade2: '19 anos',
      nome: 'Vitor Hugo Almeida Marques de Oliveira  ',
      data_de_nascimento:<b>Data_de_nascimento</b>,
      data_de_nascimento2: '26/03/2002',
      genero: 'Masculino',
      endereco: <b>Endereço</b>,
      endereco2: ' Rua Engenheiro Manuel Ferramenta Jr. 363',
      formacao: <b>Formação</b>,
      formacao2:' Nenhuma formação',
      experiencia: <b>Experiência</b>,
      experiencia2: ' Nenhuma experiencia de emprego',
      projetomaster: <b>Projetos</b>,
      projeto1: <a href = 'https://github.com/AngelCosmic/Tarefa-Frontend' >Projeto 1</a>,
      projeto2: <a href = 'https://github.com/AngelCosmic/Tarefa-Backend' >Projeto 2</a>,
      projeto3: <a href = 'https://github.com/AngelCosmic/Aluno-Backend' >Projeto 3</a>,
      projeto4: <a href = 'https://github.com/AngelCosmic/Aluno-Frontend' >Projeto 4</a>
      }
    );
  }
    
 
  render(){
    return(
      <div>
        <Meuperfil />
        <right>
          <center>
          <button onClick={this.entrar}>Mostrar</button>
          <h2>
          {this.state.nome}
          </h2>
          </center>
          <center>
          <div style={{ height: 20 }}> 
            {this.state.idade} <br />
            {this.state.idade2} <br />
            {this.state.data_de_nascimento} <br />
            {this.state.data_de_nascimento2} <br />
            {this.state.endereco} <br />
            {this.state.endereco2} <br />
            {this.state.formacao} <br />
            {this.state.formacao2} <br />
            {this.state.experiencia} <br />
            {this.state.experiencia2} <br />
            {this.state.projetomaster} <br />
            {this.state.projeto1} <br />
            {this.state.projeto2} <br />
            {this.state.projeto3} <br />
            {this.state.projeto4}
          </div>
          </center>

        </right>
      </div>
    );
  }}
 
 
export default App;

 class Meuperfil extends Component {
   
   render(){
     
    let img = 'https://scontent.fssz1-1.fna.fbcdn.net/v/t39.30808-6/241327161_3103208956578516_3808280605100652453_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGOHZjEdEXTQK0f8ESOlFZoAW3Eu7ktqIYBbcS7uS2ohuGskEy6STQlxqcibFrceoS1e41zb2mu7BEYmB4vqrqH&_nc_ohc=nhBkYVFcZDwAX9JAxVd&_nc_ht=scontent.fssz1-1.fna&oh=6f5d4475ee86a3fcbb697f63e629247d&oe=618DFDCC';
    
    return(
      <center>
      <img src={img} width={250} height={250} />
      </center>
      
    );
   }
 }
