import React, { Component } from 'react';
import FuncionarioService from '../services/FuncionarioService';
import { useNavigate } from 'react-router-dom'

class ListarFuncionarioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            funcionarios: []
        }
        this.adicionarFuncionarios = this.adicionarFuncionarios.bind(this);
        this.atualizarFuncionario = this.atualizarFuncionario.bind(this);
        this.apagarFuncionario = this.apagarFuncionario.bind(this);
    }

    componentDidMount(){
        FuncionarioService.getFuncionarios().then((res => {
            this.setState({funcionarios:res.data});
        }));

    }

    adicionarFuncionarios(){
        this.props.navigate('/adicionarFuncionarios');
    }

    atualizarFuncionario(id){
        this.props.navigate(`/atualizarFuncionarios/${id}`);
    }

    apagarFuncionario(id){
        FuncionarioService.apagarFuncionario(`${id}`).then(res=>{
            this.setState({funcionarios: this.state.funcionarios.filter(funcionarios=>funcionarios.id !== id)})
        });
    }

    


    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Funcionários</h2>
                <div className = "row">
                    <div className='float-left'>
                        <button className='btn btn-outline-primary' onClick={this.adicionarFuncionarios}>
                            Adicionar Funcionario     
                        </button>        
                    </div>
                    <br></br>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Nome </th>
                                <th> Sobrenome </th>
                                <th> Email </th>
                                <th> Ações </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.funcionarios.map(
                                    funcionarios => 
                                    <tr key  = {funcionarios.id}>
                                        <td> {funcionarios.nome} </td>
                                        <td> {funcionarios.sobrenome} </td>
                                        <td> {funcionarios.email} </td>
                                        <td>
                                            <button onClick={ () => this.atualizarFuncionario(funcionarios.id)} 
                                                className="btn btn-labeled btn-warning"> 
                                            Editar </button>

                                            <button onClick={ () => this.apagarFuncionario(funcionarios.id)} 
                                                className="btn btn-labeled btn-danger"> 
                                            Apagar </button>

                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function WithNavigate(props){
    const navigate = useNavigate();
    return <ListarFuncionarioComponent {...props} navigate={navigate}/>
}


export default WithNavigate;
