import React from 'react';

import { View, TouchableOpacity, Text } from 'react-native';

import estilosGlobal from '../estilos';

export default function Botao({ title, onPress }) {
    return <View style={estilosGlobal.inputContainer}>
        <TouchableOpacity style={[estilosGlobal.botao]} onPress={onPress}>
            <Text style={estilosGlobal.botaoTexto}>{title}</Text>
        </TouchableOpacity>
    </View>
}