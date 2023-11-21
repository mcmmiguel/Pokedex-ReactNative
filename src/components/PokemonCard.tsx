import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { PokemonCardProps } from '../interfaces';
import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get('window').width;

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {

    return (
        <TouchableOpacity activeOpacity={0.9}>
            <View style={styles.cardContainer}>
                {/* Nombre del pokemon y ID */}
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

                <View style={styles.pokebolaContainer}>
                    <Image
                        style={styles.pokebola}
                        source={require('../assets/pokebola-blanca.png')}
                    />
                </View>

                <FadeInImage
                    style={styles.pokemonImage}
                    uri={pokemon.picture}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'red',
        height: 120,
        width: windowWidth * 0.40,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        top: 20,
        left: 10,
    },
    pokebolaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.5,
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -25,
        bottom: -25,

    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5,
    },
});
