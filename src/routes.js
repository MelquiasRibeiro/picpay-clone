import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import Home from './screens/home/index';
import Wallet from './screens/wallet/index';
import Pay from './screens/pay/index';
import PayButton from './components/payButton/index';

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home',
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard',
    },
    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline',
    },
    Config: {
        lib: AntDesign,
        name: 'setting',
    },
};

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    if (route.name === 'Pay') {
                        return (
                            <PayButton
                                onPress={() => navigation.navigate('Pay')}
                                focused={focused}
                            />
                        );
                    }

                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#131418',
                    borderTopColor: 'rgba(255,255,255,0.2)',
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#92929c',
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Início',
                }}
            />
            <Tab.Screen
                name="Wallet"
                component={Wallet}
                options={{
                    title: 'Carteira',
                }}
            />
            <Tab.Screen
                name="Pay"
                component={Pay}
                options={{
                    title: '',
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Wallet}
                options={{
                    title: 'Notificações',
                }}
            />
            <Tab.Screen
                name="Config"
                component={Pay}
                options={{
                    title: 'Ajustes',
                }}
            />
        </Tab.Navigator>
    );
}
