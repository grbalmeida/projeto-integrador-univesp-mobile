import web from '../web';

export async function contato(nome, email, assunto, mensagem) {
    try {
        await web.post(`/contato-envio`, {
            nome,
            email,
            assunto,
            mensagem
        });
        return 'sucesso';
    }
    catch (error) {
        return 'erro';
    }
}