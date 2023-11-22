import React from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loader, PokemonCard, SearchInput } from '../components';
import { usePokemonSearch } from '../hooks';
import { appTheme } from '../theme/appTheme';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    if (isFetching) {
        return <Loader />;
    }

    return (
        <View style={{ ...styles.mainContainer }}>
            <SearchInput
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: (Platform.OS === 'ios') ? top : top + 15,
                }}
            />
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
                        marginTop: (Platform.OS === 'ios') ? top + 60 : top + 60,
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

});
