import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { PokemonFull } from '../interfaces';

export interface PokemonDetailsProps {
    pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: PokemonDetailsProps) => {
    return (
        <ScrollView
            style={styles.mainContainer}
        >
            {/* Types */}
            <View style={styles.typesContainer}>
                <Text style={styles.title}>Types</Text>
                <View style={styles.row}>

                    {pokemon.types.map(({ type }) => (
                        <Text key={type.name} style={styles.regularText}>{type.name}</Text>
                    ))}
                </View>
            </View>

            {/* Sprites */}
            <View style={styles.spritesContainer}>
                <Text style={styles.title}>Sprites</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        ...StyleSheet.absoluteFillObject,
    },
    typesContainer: {
        marginHorizontal: 20,
        marginTop: 370,
    },
    row: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    regularText: {
        fontSize: 17,
        marginRight: 10,
    },
    spritesContainer: {
        marginTop: 20,
        marginHorizontal: 20,
    },
});
