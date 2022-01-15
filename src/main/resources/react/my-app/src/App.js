import logo from './logo.svg';
import './App.css';
import ListarFuncionarioComponent from './components/ListarFuncionarioComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div>

      <HeaderComponent/>

      <div className="container">
        
        <ListarFuncionarioComponent></ListarFuncionarioComponent>

      </div>

      <FooterComponent/>

    </div>
  );
}

export default App;
