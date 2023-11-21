import React from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { appTheme } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={appTheme.pokebolaBG}
            />

            <FlatList
                data={simplePokemonList}
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item.picture }}
                        style={styles.pokemonImage}
                    />
                )}

                // Infinite scroll
                onEndReached={loadPokemons}
                onEndReachedThreshold={0.4}

                ListFooterComponent={
                    <ActivityIndicator
                        size={20}
                        color="grey"
                        style={styles.loader}
                    />}
            />

            {/* <Text style={{
                ...appTheme.title,
                ...appTheme.globalMargin,
                marginTop: top + 20,
            }}>Pokedex</Text> */}
        </>
    );
};

const styles = StyleSheet.create({
    loader: {
        height: 400,
    },
    pokemonImage: {
        height: 100,
        width: 100,
    },
});
