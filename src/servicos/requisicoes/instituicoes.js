import api from '../api';

export async function obterInstituicoes() {
    try {
        const resultado = await api.get(`/instituicoes`);
        return resultado.data.instituicoes;
    }
    catch (error) {
        return [];
    }
}