import React, { useState } from 'react';

import { Alert, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { contato } from '../../servicos/requisicoes/contato';

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
        <Text style={estilos.contato}>Contato</Text>
        <View>
            <View style={estilos.inputContainer}>
                <Text style={estilos.label}>Seu nome</Text>
                <TextInput
                    placeholder='Seu nome'
                    style={estilos.inputTexto}
                    value={nome}
                    onChangeText={setNome}
                />
            </View>
            <View style={estilos.inputContainer}>
                <Text style={estilos.label}>Seu e-mail</Text>
                <TextInput
                    placeholder='Seu e-mail'
                    style={estilos.inputTexto}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={estilos.inputContainer}>
                <Text style={estilos.label}>Assunto</Text>
                <TextInput
                    placeholder='Assunto'
                    style={estilos.inputTexto}
                    value={assunto}
                    onChangeText={setAssunto}
                />
            </View>
            <View style={estilos.inputContainer}>
                <Text style={estilos.label}>Sua mensagem</Text>
                <TextInput
                    placeholder='Sua mensagem'
                    editable
                    maxLength={40}
                    style={estilos.inputTexto}
                    value={mensagem}
                    onChangeText={setMensagem}
                />
            </View>
            <View style={estilos.inputContainer}>
                <TouchableOpacity style={[estilos.botao]} onPress={enviarEmail}>
                    <Text style={estilos.botaoTexto}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

const estilos = StyleSheet.create({
    contato: {
        fontWeight: '700',
        fontSize: 32,
        marginLeft: 16,
        marginTop: 16,
        color: '#000000',
        marginBottom: 20
    },
    inputContainer: {
        marginLeft: '5%'
    },
    label: {
        alignSelf: 'flex-start',
        color: '#000000',
        marginBottom: 8
    },
    inputTexto: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '90%',
        marginBottom: 16,
        borderRadius: 8,
        padding: 12
    },
    botao: {
        backgroundColor: '#ffa500',
        width: '30%',
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    botaoTexto: {
        color: '#000000',
        fontSize: 20,
    }
});