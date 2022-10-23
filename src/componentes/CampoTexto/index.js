import React from 'react-native';

import { StyleSheet, View, Text, TextInput } from 'react-native';

import estilosGlobal from '../estilos';

export default function CampoTexto({ title, value, onChangeText }) {
    return <View style={estilosGlobal.inputContainer}>
        <Text style={estilos.label}>{title}</Text>
        <TextInput
            placeholder={title}
            editable
            maxLength={40}
            style={estilos.inputTexto}
            value={value}
            onChangeText={onChangeText}
        />
    </View>
}

const estilos = StyleSheet.create({
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
})