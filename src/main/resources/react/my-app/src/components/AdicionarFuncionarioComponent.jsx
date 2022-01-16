import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom'

class AdicionarFuncionarioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            sobrenome: '',
            email: ''
        }

        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeSobrenomeHandler = this.changeSobrenomeHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.adicionarFuncionario = this.adicionarFuncionario.bind(this);


    }

    adicionarFuncionario = (e) =>{
        e.preventDefault();
        let funcionario = {nome: this.state.nome, sobrenome: this.state.sobrenome, email:this.state.email}
        console.log('func :'+ JSON.stringify(funcionario))
    }

    changeNomeHandler(event){
        this.setState({nome: event.target.value});
    }

    changeSobrenomeHandler(event){
        this.setState({sobrenome: event.target.value});
    }

    changeEmailHandler(event){
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.navigate('/listarFuncionarios');
    }
    
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Adicionar</h3>
                                <div className='card-body'>
                                    <form>
                                        <div className='form-group'>
                                            <label>Nome</label>
                                            <input placeholder='Nome' name='nome' className='form-control'
                                            value={this.state.nome} onChange={this.changeNomeHandler}/>    
                                        </div>    

                                        <div className='form-group'>
                                            <label>Nome</label>
                                            <input placeholder='Sobrenome ' name='Sobrenome' className='form-control'
                                            value={this.state.sobrenome} onChange={this.changeSobrenomeHandler}/>    
                                        </div>    

                                        <div className='form-group'>
                                            <label>Nome</label>
                                            <input placeholder='Email ' name='email' className='form-control'
                                            value={this.state.email} onChange={this.changeEmailHandler}/>    
                                        </div>    
                                    
                                        <button className='btn btn-outline-success' onClick={this.adicionarFuncionario}>Salvar</button>
                                        <button className='btn btn-outline-danger' onClick={this.cancel.bind(this)}>Cancelar</button>             

                                    </form>             
                                </div>  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function WithNavigate(props){
    const navigate = useNavigate();
    return <AdicionarFuncionarioComponent {...props} navigate={navigate}/>
}


export default WithNavigate;