import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";
import FuncionarioService from '../services/FuncionarioService';

class VisualizarFuncionarioComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            nome: '',
            sobrenome: '',
            email: ''
        }

    }

    componentDidMount(){
        FuncionarioService.getFuncionarioId(this.props.id).then((res)=>{
            let funcionario = res.data;
            this.setState({
                nome: funcionario.nome,
                sobrenome: funcionario.sobrenome,
                email: funcionario.email
            })
        });
    }

    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'> Visualizar dados do funcionário </h3>
                    <div className='card-body'>
                        <div className='row'>
                            <h6 className='font-weight-bold'>Nome</h6>
                            <div>{this.state.nome}</div>
                        </div>
                        <br/>
                        <div className='row'>
                            <h6 className='font-weight-bold'>Sobrenome</h6>
                            <div>{this.state.sobrenome}</div>
                        </div>
                        <br/>
                        <div className='row'>
                            <h6 className='font-weight-bold'>Email</h6> 
                            <div>{this.state.email}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function WithNavigate(props){
    const {id}  = useParams();
    const navigate = useNavigate();
    return <VisualizarFuncionarioComponent {...props} navigate={navigate} id={id}/>
}
 
export default WithNavigate;