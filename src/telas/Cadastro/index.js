import React, { useEffect, useState } from 'react';

import { ScrollView, View, Alert } from 'react-native';

import Title from '../../componentes/Title';
import CampoTexto from '../../componentes/CampoTexto';
import Botao from '../../componentes/Botao';
import ComboBox from '../../componentes/ComboBox';

import { obterCategorias } from '../../servicos/requisicoes/categorias';
import { cadastrarInstituicao } from '../../servicos/requisicoes/instituicoes';
import InstituicaoModel from '../../models/Instituicao';

export default function Cadastro() {

    const [autoFocusNome, setAutoFocusNome] = useState(true);

    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [descricao, setDescricao] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [telefoneComercial, setTelefoneComercial] = useState('');
    const [telefoneCelular, setTelefoneCelular] = useState('');
    const [email, setEmail] = useState('');
    const [site, setSite] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');

    // Dropdown

    const [openCategoria, setOpenCategoria] = useState(false);
    const [categoria, setCategoria] = useState(null);
    const [categorias, setCategorias] = useState([]);

    const [openCidade, setOpenCidade] = useState(false);
    const [cidade, setCidade] = useState('Araraquara');
    const [cidades, setCidades] = useState([{ label: 'Araraquara', value: 'Araraquara' }]);

    const [openEstado, setOpenEstado] = useState(false);
    const [estado, setEstado] = useState('São Paulo');
    const [estados, setEstados] = useState([{label: 'São Paulo', value: 'São Paulo'}]);

    const [openPais, setOpenPais] = useState(false);
    const [pais, setPais] = useState('Brasil');
    const [paises, setPaises] = useState([{label: 'Brasil', value: 'Brasil'}]);

    useEffect(() => {
        async function getCategorias() {
            const categorias = await obterCategorias();
            setCategorias(categorias.map(categoria => ({ label: categoria.nome, value: categoria.id })));
        }

        getCategorias();
        
    }, []);

    async function salvar() {
        const instituicao = new InstituicaoModel(nome, cnpj, descricao, categoria);
        instituicao.setEndereco(cep, logradouro, numero, complemento, bairro);
        instituicao.setContato(email, telefoneComercial, telefoneCelular, site, instagram, facebook, '', '', '');

        const resultado = await cadastrarInstituicao(instituicao);

        if (resultado === 'sucesso') {
            limparFormulario();
            Alert.alert('Instituição cadastrada com sucesso');
        } else {
            if (resultado === 'erro') {
                Alert.alert('Erro ao tentar cadastrar instituição');
            } else {
                Alert.alert(resultado[0]);
            }
        }
    }

    function limparFormulario() {
        setNome('');
        setCnpj('');
        setDescricao('');
        setCep('');
        setLogradouro('');
        setNumero('');
        setBairro('');
        setComplemento('');
        setTelefoneComercial('');
        setTelefoneCelular('');
        setEmail('');
        setSite('');
        setInstagram('');
        setFacebook('');
        setAutoFocusNome(true);
    }

    return <ScrollView>
        <Title>Cadastro de Instituições</Title>
        <View>
            <CampoTexto title='Nome' value={nome} onChangeText={setNome} autoFocus={autoFocusNome} />
            <CampoTexto title='CNPJ' value={cnpj} onChangeText={setCnpj} />
            <CampoTexto title='Descrição' value={descricao} onChangeText={setDescricao} />
            <ComboBox
                items={categorias}
                setItems={setCategorias}
                open={openCategoria}
                setOpen={setOpenCategoria}
                setValue={setCategoria}
                title='Categoria'
                value={categoria}
                translation={{
                    PLACEHOLDER: 'Selecione uma categoria',
                    NOTHING_TO_SHOW: 'Nenhuma categoria encontrada'
                }}
            />
        </View>

        <Title>Endereço</Title>
        <View>
            <CampoTexto title='CEP' value={cep} onChangeText={setCep} />
            <CampoTexto title='Rua/Avenida' value={logradouro} onChangeText={setLogradouro} />
            <CampoTexto title='Número' value={numero} onChangeText={setNumero} />
            <CampoTexto title='Bairro' value={bairro} onChangeText={setBairro} />
            <ComboBox
                items={cidades}
                setItems={setCidades}
                open={openCidade}
                setOpen={setOpenCidade}
                setValue={setCidade}
                title='Cidade'
                value={cidade}
                translation={{
                    PLACEHOLDER: 'Selecione uma cidade',
                    NOTHING_TO_SHOW: 'Nenhuma cidade encontrada'
                }}
            />
            <ComboBox
                items={estados}
                setItems={setEstados}
                open={openEstado}
                setOpen={setOpenEstado}
                setValue={setEstado}
                title='Estado'
                value={estado}
                translation={{
                    PLACEHOLDER: 'Selecione um estado',
                    NOTHING_TO_SHOW: 'Nenhum estado encontrado'
                }}
            />
            <ComboBox
                items={paises}
                setItems={setPaises}
                open={openPais}
                setOpen={setOpenPais}
                setValue={setPais}
                title='País'
                value={pais}
                translation={{
                    PLACEHOLDER: 'Selecione um país',
                    NOTHING_TO_SHOW: 'Nenhum país encontrado'
                }}
            />
            <CampoTexto title='Complemento' value={complemento} onChangeText={setComplemento} />
        </View>

        <Title>Contato</Title>
        <View>
            <CampoTexto title='Telefone Comercial' value={telefoneComercial} onChangeText={setTelefoneComercial} />
            <CampoTexto title='Telefone Celular' value={telefoneCelular} onChangeText={setTelefoneCelular} />
            <CampoTexto title='E-mail' value={email} onChangeText={setEmail} />
            <CampoTexto title='Site' value={site} onChangeText={setSite} />
            <CampoTexto title='Instagram' value={instagram} onChangeText={setInstagram} />
            <CampoTexto title='Facebook' value={facebook} onChangeText={setFacebook} />
        </View>

        <Botao title='Enviar' onPress={salvar} />
    </ScrollView>
}