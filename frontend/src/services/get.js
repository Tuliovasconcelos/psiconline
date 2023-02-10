import axios from "axios";

export function Especialidades() {
    async () => await axios.get('/Especialidade').then((response) => {
        return response.data;
    }).catch(err => {
        return err;
    });
}

export function Abordagens() {
    async () => await axios.get('/Abordagem').then((response) => {
        return response.data;
    }).catch(err => {
        return err;
    });
}

