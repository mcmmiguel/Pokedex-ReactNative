import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigator';

interface PokemonScreenProps extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }

export const PokemonScreen = ({ navigation, route }: PokemonScreenProps) => {

    const { color, simplePokemon } = route.params;

    return (
        <View>
            <Text>{simplePokemon.name} - {color}</Text>
        </View>
    );
};
