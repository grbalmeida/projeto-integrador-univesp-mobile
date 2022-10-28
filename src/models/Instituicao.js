export default class InstituicaoModel {
    constructor(nome, cnpj, descricao, categoria) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.descricao = descricao;
        this.categoria = categoria;
    }

    setEndereco(cep, rua, numero, complemento, bairro, exibirEndereco = 'N') {
        this.cep = cep;
        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.exibirEndereco = exibirEndereco;
    }

    setContato(email, telefone_comercial, telefone_celular, site, instagram, facebook, twitter, linkedin, youtube) {
        this.email = email;
        this.telefone_comercial = telefone_comercial;
        this.telefone_celular = telefone_celular;
        this.site = site;
        this.instagram = instagram;
        this.facebook = facebook;
        this.twitter = twitter;
        this.linkedin = linkedin;
        this.youtube = youtube;
    }
}