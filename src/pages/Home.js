import React from "react";
import "./css/Home.css";
import Menu from "../Components/Menu/menu"
import Rodape from '../Components/Rodape/Rodape'

const Home = () => {
  return (
    <>
    <Menu/>
    <div className="container-md">

    <h1 className="slogan-md">Gerencie seus pacientes de forma rápida!</h1>

    <div class="home-md"><a href="./"><img src={require('../img/home.png').default}   alt="Imagem responsiva"  /></a></div>

    <div className="buttons">
     <button className="navbar-toggler text-center-md" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="botao2-md"> </button>   
          <a className="nav-link-md1" href="../listarclientes" to='/'> LISTA DE CLIENTES</a> 

          <button className="navbar-toggler text-center-md" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="botao3-md"> </button>   
          <a className="nav-link-md2" href="../novocliente" to='/'> CADASTRAR CLIENTE</a>


          <button className="navbar-toggler text-center-md" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="botao4-md"> </button>   
          <a className="nav-link-md3" href="../clienterisco" to='/'> CLIENTE COM RISCO</a>

          <button className="navbar-toggler text-center-md" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="botao5-md"> </button>   
          <a className="nav-link-md4" href="../atualizarcliente" to='/'> EDITAR CLIENTE</a>

          </div>

          </div>  

          <Rodape/>
    
    </>
  );
};

export default Home;
