import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    label: {
        alignSelf: 'flex-start',
        color: '#000000',
        marginBottom: 8
    },
    inputContainer: {
        marginLeft: '5%'
    },
    inputTexto: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '90%',
        marginBottom: 16,
        borderRadius: 8,
        padding: 12
    },
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