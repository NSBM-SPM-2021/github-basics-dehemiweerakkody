import axios from "axios";

const instance = axios.create({
    baseURL:"https://nsbm-spm-backend.herokuapp.com",
});


export default instance;
