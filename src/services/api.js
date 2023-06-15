import axios from "axios";

//35930021/json/

const api = axios.create({
baseURL:"http://viacep.com.br/ws/35930021/json/"
});

export default api; 