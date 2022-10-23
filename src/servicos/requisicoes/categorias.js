import api from '../api';

export async function obterCategorias() {
    try {
        const resultado = await api.get(`/categorias`);
        return resultado.data;
    }
    catch (error) {
        return [];
    }
}