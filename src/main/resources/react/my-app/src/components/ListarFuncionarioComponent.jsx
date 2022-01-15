import React, { Component } from 'react';

class ListarFuncionarioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            funcionarios: []
        }
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Funcionários</h2>
                <div classname = "row">
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

export default ListarFuncionarioComponent;