import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import ListarFuncionarioComponent from './components/ListarFuncionarioComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent/>
            <div className="container">
              <Routes> 
                <Route path = "/" element = {<ListarFuncionarioComponent/>}></Route>
                <Route path = "/listarFuncionarios" element = {<ListarFuncionarioComponent/>}></Route>
                
              </Routes>
            </div>
          <FooterComponent/>
      
      </Router>
    </div>
  );
}

export default App;
