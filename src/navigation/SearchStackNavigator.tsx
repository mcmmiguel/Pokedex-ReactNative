import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SimplePokemon } from '../interfaces';
import { PokemonScreen, SearchScreen } from '../screens';

export type RootStackParams = {
    SearchScreen: undefined;
    PokemonScreen: { simplePokemon: SimplePokemon, color: string }
}

const Stack = createStackNavigator<RootStackParams>();

export const SearchStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}
        >
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    );
};
