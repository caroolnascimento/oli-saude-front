import "./css/clienterisco.css";
import React from "react";


class ListRisc extends React.Component {
  state = {
      clientes: []
  };

  componentDidMount() {
      fetch('http://localhost:5000/clienterisco/2')
          .then(res => res.json())
          .then(res => {
              this.setState({
                  clientes: res
              });
          });
  }

  render() {
    
      let content = <p>Carregando...</p>

      if (this.state.clientes.length !== 0) {
          content = (<ul> 
              {this.state.clientes.map(item => (
                
                  <li className= "flex-container-list"  key={item.id}>
                   
                      <p><b>Nome:</b> {item.nome}</p>
                      <p><b>Data de Nascimento :</b> {item.data_nascimento}</p>
                      <p><b>Sexo: </b> {item.sexo}</p>
                      <p><b>Problema de Sáude: </b> {item.problema_saude}</p>
                      <p><b>Grau do Problema: </b> {item.grau_problema}</p>
                      <p><b>Data de Criação:</b>{item.data_criacao}</p>
                      <p><b>Data da Última Atualização:</b>{item.data_atualizacao}</p>
                      
                      <br/> 
                      
                  </li>
             
             ))}


          </ul>)
      }

      return (
          <div>
                        
              <h1>Lista de clientes</h1>

              
              <br/> 
              <button className="navbar-toggler text-center-md" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="botao7-md"> </button>   
        <a className="nav-link-md7" href="./" to='/'> VOLTAR</a>
        <br/>
            

              {content}
          </div>
      );
  }
}

export default ListRisc;