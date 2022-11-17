import React, { useEffect, useState } from 'react';

import { FlatList, TouchableOpacity, Text, Image, StyleSheet, View, Modal, ScrollView, Linking } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import VisiteNossoSite from '../../componentes/VisiteNossoSite';

import { obterInstituicoes } from '../../servicos/requisicoes/instituicoes';


export default function Instituicoes({ route, navigation }) {
    const [instituicoes, setInstituicoes] = useState([]);
    const [nome, setNome] = useState('');
    const [logo, setLogo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [site, setSite] = useState('');
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
        setLogo(instituicao.logo);
        setDescricao(instituicao.description);
        setSite(instituicao.contact.site);
    }

    function abrirSite(site) {
        Linking.openURL(site)
            .catch(err => console.error("Couldn't load page", err));
    }

    return <>
        <Modal
            visible={exibirModalInstituicao}
            animationType='slide'
            onRequestClose={() => {console.log('Modal has been closed.');}}
            transparent={false}
         >
            <ScrollView style={estilos.containerModal}>
                <View style={estilos.fecharModal}>
                    <TouchableOpacity
                        style={estilos.iconeFechar}
                        onPress={() => {
                            setExibirModalInstituicao(!exibirModalInstituicao);
                        }}
                    >
                        <Text>
                            <Icon name="close" size={40} color="#000" />
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image style={estilos.imagemModal} source={{ uri: logo }} />
                    <Text style={estilos.nomeModal}>{nome}</Text>
                    <Text style={estilos.descricaoModal}>{descricao}</Text>
                </View>
                <View style={estilos.containerLinks}>
                    {site && <VisiteNossoSite onPress={() => abrirSite(site)} />}
                    <View style={estilos.containerRedeSocial}>
                        <TouchableOpacity>
                            <Icon style={estilos.icone} name="facebook" size={40} color="#4267B2" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon style={estilos.icone} name="instagram" size={40} color="#C13584" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon style={estilos.icone} name="whatsapp" size={40} color="#25D366" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
        backgroundColor: '#F8F8F8',
        height: 600,
    },
    fecharModal: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    iconeFechar: {
        marginTop: 10,
        marginRight: 10,
    },
    imagemModal: {
        width: null,
        resizeMode: 'contain',
        height: 220,
        marginHorizontal: 10,
    },
    nomeModal: {
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    descricaoModal: {
        margin: 10,
        fontSize: 18,
        lineHeight: 26
    },
    containerLinks: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerRedeSocial: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
    },
    icone: {
        marginHorizontal: 10,
    }
})