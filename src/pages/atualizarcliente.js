import "./css/novocliente.css";
import React from "react";


const novocliente = () => {
  constructor(props)
   {
    super(props)
    this.state = { numero: 123 }
  }
  alterarNumero = (novoNumero) => {
    this.setState({numero: novoNumero});
}
  
     
    return(
      

<div class="container">
    <hr/>
    <div className="cadastro">Cadastre um novo Cliente</div>
    <hr/>

    <form action="http://localhost:5000/novocliente" method="POST">
       

        <div class="form-group">
            <label for="nome" >NOME</label>
            <input class="form-control" placeholder="Seu nome" name="nome"/>
        </div>

        <div class="form-group">
            <label for="data_nascimento">DATA DE NASCIMENTO</label>
            <input class="form-control" placeholder="Infome Data de Nascimento no formato AAAA/MM/DD" name="data_nascimento"/>
        </div>

        <div class="form-group">
            <label for="sexo">SEXO</label>
            <input class="form-control" placeholder="Infome 'M' para masculino,'F' para feminino ou 'N' se prefirar não declarar"  name="sexo"/>
            
        </div>

         <div class="form-group">
            <label for="problema_saude">PROBLEMA DE SÁUDE</label>
            <input class="form-control"  placeholder="Infome o problema de sáude" name="problema_saude"/>
          
        </div>

        <div class="form-group">
            <label for="grau_problema">GRAU DO PROBLEMA</label>
            <input class="form-control" placeholder="Digite o grau do problema '1' ou '2'."  name="grau_problema"/>
            
        </div>

        
       

        
        <button type="submit" class="btn btn-success">ENVIAR</button>
        <br/><br/>

        <a class="btn btn-danger" href="./" role="button">VOLTAR</a>

      
          <br/>
    </form>
</div>



      
    )
  
}
  


export default novocliente;
