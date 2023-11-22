import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loader, PokemonCard, SearchInput } from '../components';
import { usePokemonSearch } from '../hooks';
import { appTheme } from '../theme/appTheme';
import { SimplePokemon } from '../interfaces';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();
    const [term, setTerm] = useState('');
    const [pokemonsFiltered, setPokemonsFiltered] = useState<SimplePokemon[]>([]);

    useEffect(() => {
        if (term.length === 0) { return setPokemonsFiltered([]); }

        if (isNaN(Number(term))) {
            setPokemonsFiltered(simplePokemonList.filter((pokemons) => pokemons.name.toLowerCase().includes(term.toLowerCase())));
        } else {
            const pokemonById = simplePokemonList.find((pokemon) => pokemon.id === term);
            setPokemonsFiltered(
                pokemonById ? [pokemonById] : []
            );
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [term]);


    if (isFetching) {
        return <Loader />;
    }

    return (
        <View style={{ ...styles.mainContainer }}>
            <SearchInput
                onDebounce={(value) => setTerm(value)}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: (Platform.OS === 'ios') ? top : top + 15,
                }}
            />
            <FlatList
                data={(term.length > 0) ? pokemonsFiltered : simplePokemonList}
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}

                // Header
                ListHeaderComponent={
                    <Text style={{
                        ...appTheme.title,
                        ...appTheme.globalMargin,
                        marginTop: (Platform.OS === 'ios') ? top + 60 : top + 60,
                        marginBottom: top + 5,
                    }}>
                        {term}
                    </Text>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginHorizontal: 20,
    },

});
