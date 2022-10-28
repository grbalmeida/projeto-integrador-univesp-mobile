import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Instituicoes from './telas/Instituicoes';
import Contato from './telas/Contato';
import Cadastro from './telas/Cadastro';
import Instituicao from './telas/Instituicao';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const cores = {
    laranjaClaro: '#ffebcc',
    laranjaEscuro: 'orange',
    preto: '#000',
};

export default function Rotas() {

    return <NavigationContainer>
       <Tab.Navigator
            tabBarOptions={{
                activeTintColor: cores.preto,
                inactiveTintColor: cores.preto,
                activeBackgroundColor: cores.laranjaEscuro,
                inactiveBackgroundColor: cores.laranjaClaro,
                style: {
                    height: 70,
                },
                labelStyle: {
                    width: '100%',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: 16,
                    lineHeight: 21,
                    marginTop: 3,
                    paddingTop: 21,
                    backgroundColor: cores.laranjaClaro,
                },
                keyboardHidesTabBar: true,
            }}
        >
            <Tab.Screen name='Instituições' component={Instituicoes} />
            <Tab.Screen name='Contato' component={Contato} />
            <Tab.Screen name='Nova instituição' component={Cadastro} />
        </Tab.Navigator>
    </NavigationContainer>
}