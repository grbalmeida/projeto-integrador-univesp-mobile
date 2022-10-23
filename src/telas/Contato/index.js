import React, { useState } from 'react';

import { Alert, View } from 'react-native';

import { contato } from '../../servicos/requisicoes/contato';
import Title from '../../componentes/Title';
import CampoTexto from '../../componentes/CampoTexto';
import Botao from '../../componentes/Botao';

export default function Contato() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

    async function enviarEmail() {
        const resultado = await contato(
            nome,
            email,
            assunto,
            mensagem
        );

        setNome('');
        setEmail('');
        setAssunto('');
        setMensagem('');

        if (resultado === 'sucesso') {
            Alert.alert('E-mail enviado com sucesso!');
            navigation.goBack();
        } else {
            Alert.alert('Não foi possível enviar o e-mail');
        }
    }

    return <View>
        <Title>Contato</Title>
        <View>
            <CampoTexto title='Seu nome' value={nome} onChangeText={setNome} />
            <CampoTexto title='Seu e-mail' value={email} onChangeText={setEmail} />
            <CampoTexto title='Assunto' value={assunto} onChangeText={setAssunto} />
            <CampoTexto title='Sua mensagem' value={mensagem} onChangeText={setMensagem} />
            <Botao title='Enviar' onPress={enviarEmail} />
        </View>
    </View>
}
