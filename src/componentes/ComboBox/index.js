import React from 'react';

import { View, Text } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import estilosGlobal from '../estilos';

export default function ComboBox({ title, open, value, items, setOpen, setValue, setItems, translation }) {
    return <View style={estilosGlobal.inputContainer}>
        <Text style={estilosGlobal.label}>{title}</Text>
        <DropDownPicker
            listMode="SCROLLVIEW" // Virtualizedlist should never be nested inside scrollview
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            translation={translation}
            style={estilosGlobal.inputTexto}
        />
    </View>
}