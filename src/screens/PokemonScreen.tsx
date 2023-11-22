import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigation/HomeStackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInImage, PokemonDetails } from '../components';
import { usePokemon } from '../hooks';

interface PokemonScreenProps extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }

export const PokemonScreen = ({ navigation, route }: PokemonScreenProps) => {

    const { color, simplePokemon } = route.params;
    const { id, name, picture } = simplePokemon;
    const { top } = useSafeAreaInsets();

    const { isLoading, pokemon } = usePokemon(id);

    return (
        <View style={styles.mainContainer}>
            {/* Header */}
            <View style={{ ...styles.headerContainer, backgroundColor: color }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.goBack()}
                    style={{
                        marginTop: top + 10,
                        ...styles.backButton,
                    }}
                >
                    <Icon
                        name="arrow-back-outline"
                        color="white"
                        size={35}
                    />
                </TouchableOpacity>

                {/* Nombre del pokemon */}
                <Text
                    style={{
                        ...styles.pokemonName,
                        top: top + 40,
                    }}
                >
                    {name + '\n'}
                    #
                    {id}
                </Text>

                {/* Pokebola blanca */}
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokebola}
                />

                <FadeInImage
                    uri={picture}
                    style={styles.pokemonImage} />
            </View>

            {/* Detalles y Loading */}
            {isLoading
                ? <View style={styles.loaderContainer}>
                    <ActivityIndicator
                        color={color}
                        size={50}
                    />
                </View>
                : <PokemonDetails pokemon={pokemon} />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    pokemonName: {
        color: 'white',
        fontSize: 50,
        alignSelf: 'flex-start',
        left: 20,
    },
    pokebola: {
        width: 250,
        height: 250,
        opacity: 0.7,
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
