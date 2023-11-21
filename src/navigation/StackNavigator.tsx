import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, PokemonScreen } from '../screens';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    );
};
