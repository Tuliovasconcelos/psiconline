import api from "./api";

export async function Especialidades() {

    let especialidades = [];

    await api.get('/Especialidade')
        .then(function (response) {
            especialidades = response.data;

        })
        .catch(function (error) {
            console.log(error);
        })

    return especialidades;


}


export async function Abordagens() {

    let abordagens = [];

    await api.get('/Abordagem')
        .then(function (response) {

            abordagens = response.data;

        })
        .catch(function (error) {

            console.log(error);
        })

    return abordagens;

}

