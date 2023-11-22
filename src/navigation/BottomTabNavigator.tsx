import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigator } from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { SearchScreen } from '../screens';

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
                component={StackNavigator}
                options={{
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({ color }) => <Icon name="list-outline" color={color} size={25} />,
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Búsqueda',
                    tabBarIcon: ({ color }) => <Icon name="search-outline" color={color} size={25} />,
                }}
            />
        </Tab.Navigator>
    );
};
