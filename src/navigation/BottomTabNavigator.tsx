import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackNavigator } from './HomeStackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { SearchStackNavigator } from './SearchStackNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: 'white' }}
            screenOptions={{
                tabBarActiveTintColor: '#5856d6',
                tabBarLabelStyle: {
                    marginBottom: (Platform.OS === 'ios') ? 0 : 10,
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    borderWidth: 0,
                    elevation: 0,
                    height: (Platform.OS === 'ios') ? 80 : 60,
                },
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({ color }) => <Icon name="list-outline" color={color} size={25} />,
                }}
            />
            <Tab.Screen
                name="SearchTab"
                component={SearchStackNavigator}
                options={{
                    tabBarLabel: 'Búsqueda',
                    tabBarIcon: ({ color }) => <Icon name="search-outline" color={color} size={25} />,
                }}
            />
        </Tab.Navigator>
    );
};
