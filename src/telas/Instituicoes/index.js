import React, { useEffect, useState } from 'react';

import { FlatList, TouchableOpacity, Text, Image, StyleSheet, View, Modal } from 'react-native';
import { obterInstituicoes } from '../../servicos/requisicoes/instituicoes';

export default function Instituicoes({ route, navigation }) {
    const [instituicoes, setInstituicoes] = useState([]);
    const [nome, setNome] = useState('');
    const [exibirModalInstituicao, setExibirModalInstituicao] = useState(false);

    useEffect(() => {
        const getInstituicoes = async () => {
            const resultado = await obterInstituicoes();
            setInstituicoes(resultado);
        };

        getInstituicoes();
    }, []);

    function exibirInstituicao(instituicao) {
        setExibirModalInstituicao(true);
        setNome(instituicao.name);
    }

    return <>
        <Modal
            visible={exibirModalInstituicao}
            animationType='slide'
            onRequestClose={() => {console.log('Modal has been closed.');}}
            transparent={false}
         >
          <View style={estilos.containerModal}>
           <TouchableOpacity
            onPress={() => {
                setExibirModalInstituicao(!exibirModalInstituicao);
                }}
            >
            <Text>{nome}</Text>
            </TouchableOpacity>
            </View>
        </Modal>
        <FlatList
            data={instituicoes}
            removeClippedSubviews={false}
            renderItem={({ item }) => (
                <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => exibirInstituicao(item)}>
                    <Image style={estilos.imagem} source={{uri: item.logo}} />
                    <View style={estilos.informacoes}>
                        <Text style={estilos.nome}>{ item.name }</Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={({id}) => String(id)}
        />
    </>
}

const estilos = StyleSheet.create({
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    containerModal: {
        alignItems: 'center',
        backgroundColor: 'green',
        justifyContent: 'center',
        height: 600,
    },
})