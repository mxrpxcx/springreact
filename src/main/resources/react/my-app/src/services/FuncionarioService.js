import axios from 'axios';

const API_URL_LISTAR_FUNCIONARIO = "http://localhost:8080/api/v1/listarFuncionarios";
const API_URL_ADICIONAR_FUNCIONARIO = "http://localhost:8080/api/v1/adicionarFuncionarios";

class FuncionarioService {
    
    getFuncionarios(){
        return axios.get(API_URL_LISTAR_FUNCIONARIO);
    }

    adicionarFuncionario(funcionario){
        return axios.post(API_URL_ADICIONAR_FUNCIONARIO, funcionario)
    }

}

export default new FuncionarioService()