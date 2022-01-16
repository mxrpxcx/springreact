import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router';
import ListarFuncionarioComponent from './components/ListarFuncionarioComponent';
import AdicionarFuncionarioComponent from './components/AdicionarFuncionarioComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AtualizarFuncionarioComponent from './components/AtualizarFuncionarioComponent';

function App() {
  return (
    <div>

        
          <HeaderComponent/>
            <div className="container">
              <Routes> 
                <Route path = "/" exact element = {<ListarFuncionarioComponent/>}></Route>
                <Route path = "/listarFuncionarios" element = {<ListarFuncionarioComponent/>}></Route>
                <Route path = "/adicionarFuncionarios" element = {<AdicionarFuncionarioComponent/>}></Route>
                <Route path = "/atualizarFuncionarios/:id" element = {<AtualizarFuncionarioComponent/>}></Route>
                
              </Routes>
            </div>
          <FooterComponent/>
      

    </div>
  );
}

export default App;
