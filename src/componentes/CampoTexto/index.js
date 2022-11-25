import React from 'react-native';

import { StyleSheet, View, Text, TextInput } from 'react-native';

import estilosGlobal from '../estilos';

export default function CampoTexto({ title, value, onChangeText, autoFocus = false }) {
    return <View style={estilosGlobal.inputContainer}>
        <Text style={estilosGlobal.label}>{title}</Text>
        <TextInput
            placeholder={title}
            editable
            maxLength={200}
            style={estilosGlobal.inputTexto}
            value={value}
            onChangeText={onChangeText}
            autoFocus={autoFocus}
        />
    </View>
}