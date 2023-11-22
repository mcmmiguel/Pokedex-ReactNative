import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { PokemonFull } from '../interfaces';
import { FadeInImage } from './FadeInImage';

export interface PokemonDetailsProps {
    pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: PokemonDetailsProps) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.mainContainer}
        >
            {/* Types y peso */}
            <View style={styles.typesContainer}>
                <Text style={styles.title}>Types</Text>
                <View style={styles.row}>
                    {pokemon.types.map(({ type }) => (
                        <Text key={type.name} style={styles.regularText}>{type.name}</Text>
                    ))}
                </View>
                <Text style={styles.title}>Weight</Text>
                <Text style={styles.regularText}>{pokemon.weight} lb</Text>
            </View>

            {/* Sprites */}
            <View style={styles.regularContainer}>
                <Text style={styles.title}>Sprites</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <FadeInImage style={styles.basicSprite} uri={pokemon.sprites.front_default} />
                <FadeInImage style={styles.basicSprite} uri={pokemon.sprites.back_default} />
                <FadeInImage style={styles.basicSprite} uri={pokemon.sprites.front_shiny} />
                <FadeInImage style={styles.basicSprite} uri={pokemon.sprites.back_shiny} />
            </ScrollView>

            {/* Habilidades */}
            <View style={styles.regularContainer}>
                <Text style={styles.title}>Base Skills</Text>
                <View style={styles.row}>
                    {pokemon.abilities.map(({ ability }) => (
                        <Text key={ability.name} style={styles.regularText}>{ability.name}</Text>
                    ))}
                </View>
            </View>

            {/* Movimientos */}
            <View style={styles.regularContainer}>
                <Text style={styles.title}>Moves</Text>
                <View style={styles.row}>
                    {pokemon.moves.map(({ move }) => (
                        <Text key={move.name} style={styles.regularText}>{move.name}</Text>
                    ))}
                </View>
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
        flexWrap: 'wrap',
    },
    title: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold',
    },
    regularText: {
        fontSize: 17,
        marginRight: 10,
    },
    regularContainer: {
        marginHorizontal: 20,
    },
    basicSprite: {
        width: 100,
        height: 100,
    },
});
