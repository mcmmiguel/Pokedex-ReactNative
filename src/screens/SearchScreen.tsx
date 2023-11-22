import React from 'react';
import { View, StyleSheet, Platform, ActivityIndicator, Text, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard, SearchInput } from '../components';
import { usePokemonSearch } from '../hooks';
import { appTheme } from '../theme/appTheme';

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    if (isFetching) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size={50} color="gray" />
                <Text>Cargando...</Text>
            </View>
        );
    }

    return (
        <View style={{ ...styles.mainContainer, marginTop: (Platform.OS === 'ios') ? top : top + 10 }}>
            <SearchInput />
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
                        marginTop: top + 5,
                        marginBottom: top + 5,
                    }}>
                        Pokedex
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
    loaderContainer: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
