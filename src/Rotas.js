import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Instituicoes from './telas/Instituicoes';
import Contato from './telas/Contato';
import Cadastro from './telas/Cadastro';

const Tab = createBottomTabNavigator();

const cores = {
    laranjaClaro: '#ffebcc',
    laranjaEscuro: 'orange',
    preto: '#000',
};

export default function Rotas() {
    return <NavigationContainer>
       <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: cores.preto,
                tabBarInactiveTintColor: cores.preto,
                tabBarActiveBackgroundColor: cores.laranjaEscuro,
                tabBarInactiveBackgroundColor: cores.laranjaClaro,
                tabBarStyle: {
                    height: 70
                },
                tabBarLabelStyle: {
                    width: '100%',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: 16,
                    lineHeight: 21,
                    marginTop: 3,
                    paddingTop: 21,
                    backgroundColor: cores.laranjaClaro
                },
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen name='Instituições' component={Instituicoes} options={{tabBarIcon: () => null}} />
            <Tab.Screen name='Contato' component={Contato} options={{tabBarIcon: () => null}} />
            <Tab.Screen name='Nova instituição' component={Cadastro} options={{tabBarIcon: () => null}} />
        </Tab.Navigator>
    </NavigationContainer>
}