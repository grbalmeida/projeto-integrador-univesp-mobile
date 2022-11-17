import React from 'react';

import { View, TouchableOpacity, Text } from 'react-native';

import estilosGlobal from '../estilos';

export default function VisiteNossoSite({ onPress }) {
    return <View style={{margin: 10}}>
        <TouchableOpacity style={[estilosGlobal.botao, {width: 200}]} onPress={onPress}>
            <Text style={estilosGlobal.botaoTexto}>Visite nosso site!</Text>
        </TouchableOpacity>
    </View>
}