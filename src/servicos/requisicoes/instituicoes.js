import api from '../api';

var FormDataInstituicao = require('form-data');

export async function obterInstituicoes() {
    try {
        const resultado = await api.get(`/instituicoes`);
        return resultado.data.instituicoes;
    }
    catch (error) {
        return [];
    }
}

export async function cadastrarInstituicao(instituicao) {
    try {

        const FormData = global.FormData;
        const formDataInstituicao = new FormData();

        for (const key of Object.keys(instituicao)) {
            formDataInstituicao.append(key, instituicao[key]);
        }

        // console.log('getBoundary', formDataInstituicao.getBoundary);
        // console.log('-----------------------------------------------')

        await api({
            url: '/cadastrar',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            transformRequest: (data, headers) => {
                return formDataInstituicao;
            },
            data: formDataInstituicao,
        })
        return 'sucesso';
    }
    catch (error) {
        if (error?.response?.data?.errors) {
            return error.response.data.errors;
        }

        return 'erro';
    }
}