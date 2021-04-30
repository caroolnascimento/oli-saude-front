import React from "react";
import "../../pages/css/Rodape.css";
import { FiInstagram, FiFacebook } from 'react-icons/fi';
import { AiOutlineWhatsApp } from "react-icons/ai";

const Rodape = () => {
  return (
    <>
           
      <div className="footer">
        <div className="rodape-container">

        <div className="nossasRedes" id="nossasRedes">
                    <br/>
          <div class="facebook"><a href="https://web.facebook.com/saudeoli/"  ><img src={require('../../img/facebook.jpg').default}  alt="Imagem responsiva"  /></a></div>

          <div class="instagram"><a href="https://web.instagram.com/saudeoli/"  ><img src={require('../../img/instagram.jpg').default}   alt="Imagem responsiva"  /></a></div>

          <div class="linkedin"><a href="https://web.linkedin.com/saudeoli/"  ><img src={require('../../img/linkedin.jpg').default}  alt="Imagem responsiva"  /></a></div>

          <div class="whatsapp"><a href="https://web.whatsapp.com/saudeoli/"  ><img src={require('../../img/whatsapp.jpg').default}  alt="Imagem responsiva"  /></a></div>
          </div>

          <p> Copyright &copy;Projeto Oil 2021, todos direitos reservados.</p>
        </div>
      </div>
    </>
  );
};


export default Rodape;
