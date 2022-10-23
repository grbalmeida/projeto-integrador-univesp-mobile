import React from 'react';

import { StyleSheet, Text } from 'react-native';

export default function Title({ children }) {
    return <Text style={estilos.title}>{children}</Text>
}

const estilos = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontSize: 32,
        marginLeft: 16,
        marginTop: 16,
        color: '#000000',
        marginBottom: 20
    },
});