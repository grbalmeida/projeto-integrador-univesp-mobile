import React from 'react';

import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import estilosGlobal from '../estilos';

export default function Botao({ title, onPress }) {
    return <View style={estilosGlobal.inputContainer}>
        <TouchableOpacity style={[estilos.botao]} onPress={onPress}>
            <Text style={estilos.botaoTexto}>{title}</Text>
        </TouchableOpacity>
    </View>
}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: '#ffa500',
        width: '30%',
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginBottom: 16
    },
    botaoTexto: {
        color: '#000000',
        fontSize: 20,
    }
});