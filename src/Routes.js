import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './pages/css/App.css';
import Home from './pages/Home';
import novocliente from './pages/novocliente';
import clienterisco from './pages/clienterisco';
import atualizarcliente from './pages/atualizarcliente';
import listarclientes from './pages/listarclientes';



const Rotas = () => {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route exact path="/" component={Home} />
                <Route exact path="/clienterisco" component={clienterisco} />
                <Route exact path="/novocliente" component={novocliente} />
                <Route exact path="/atualizarcliente" component={atualizarcliente} />
                <Route exact path="/listarclientes" component={listarclientes} />

            </Switch>
        </BrowserRouter>
    );
}
export default Rotas;