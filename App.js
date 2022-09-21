import React from 'react';
import type {Node} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native';

import Rotas from './src/Rotas';

const App: () => Node = () => {
  return <>
    <SafeAreaView style={estilos.ajusteTela}>
      <StatusBar />
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={estilos.preencher}>
        <Rotas />
      </KeyboardAvoidingView>
    </SafeAreaView>
    <SafeAreaView style={estilos.ajusteTelaBaixo} />
  </>
};

export default App;

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