import React from 'react';
import { Image, FlatList, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { appTheme } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks';
import { PokemonCard } from '../components';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={appTheme.pokebolaBG}
            />

            <View style={styles.flatlistContainer}>
                <FlatList
                    data={simplePokemonList}
                    keyExtractor={(pokemon) => pokemon.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item }) => <PokemonCard pokemon={item} />}

                    // Header
                    ListHeaderComponent={
                        <Text style={{
                            ...appTheme.title,
                            ...appTheme.globalMargin,
                            marginTop: top + 20,
                            marginBottom: top + 20,
                        }}>
                            Pokedex
                        </Text>
                    }

                    // Infinite scroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}

                    ListFooterComponent={
                        <ActivityIndicator
                            size={20}
                            color="grey"
                            style={styles.loader}
                        />
                    }
                />
            </View>


        </>
    );
};

const styles = StyleSheet.create({
    flatlistContainer: {
        alignItems: 'center',
    },
    loader: {
        height: 400,
    },
    pokemonImage: {
        height: 100,
        width: 100,
    },
});
