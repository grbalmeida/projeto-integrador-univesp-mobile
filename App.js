import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';

import TelaPadrao from './src/componentes/TelaPadrao';
import Rotas from './src/Rotas';

const App: () => Node = () => {
  return <TelaPadrao>
    <Rotas />
  </TelaPadrao>
};

export default App;
