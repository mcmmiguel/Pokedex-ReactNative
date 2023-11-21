import React from 'react';
import { View, Text, Image } from 'react-native';
import { appTheme } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isLoading, simplePokemonList } = usePokemonPaginated();
    console.log(simplePokemonList);

    return (
        <View>
            <Image
                source={require('../assets/pokebola.png')}
                style={appTheme.pokebolaBG}
            />
            <Text style={{
                ...appTheme.title,
                ...appTheme.globalMargin,
                marginTop: top + 20,
            }}>Pokedex</Text>
        </View>
    );
};
