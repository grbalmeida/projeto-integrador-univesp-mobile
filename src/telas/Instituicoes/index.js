import React, { useEffect, useState } from 'react';

import { FlatList, TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';
import { obterInstituicoes } from '../../servicos/requisicoes/instituicoes';

export default function Instituicoes() {
    const [instituicoes, setInstituicoes] = useState([]);

    useEffect(() => {
        const getInstituicoes = async () => {
            const resultado = await obterInstituicoes();
            setInstituicoes(resultado);
        };

        getInstituicoes();
    }, []);


    return <>
        <FlatList
            data={instituicoes}
            removeClippedSubviews={false}
            renderItem={({ item }) => (
                <TouchableOpacity style={{flexDirection: 'row'}}>
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
})