import axios from 'axios';

const API_URL_LISTAR_FUNCIONARIO = "http://localhost:8080/api/v1/listarFuncionarios";

class FuncionarioService {
    
    getFuncionarios(){
        return axios.get(API_URL_LISTAR_FUNCIONARIO);
    }

}

export default new FuncionarioService()