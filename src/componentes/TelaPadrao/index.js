import React from 'react';

import { StyleSheet, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';

export default function TelaPadrao({ children }) {
    return <>
        <SafeAreaView style={estilos.ajusteTela}>
            <StatusBar backgroundColor={cores.laranjaClaro} />
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={estilos.preencher}>
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
        <SafeAreaView style={estilos.ajusteTelaBaixo} />
    </>
}

const cores = {
    laranjaClaro: '#ffebcc',
};

const estilos = StyleSheet.create({
    preencher: {
      flex: 1,
    },
    ajusteTela: {
      flex: 1,
      backgroundColor: cores.laranjaClaro,
    },
    ajusteTelaBaixo: {
      flex: 0,
      backgroundColor: cores.laranjaClaro,
    },
  });