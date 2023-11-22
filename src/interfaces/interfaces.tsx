import { StyleProp, ImageStyle } from 'react-native';
import { PokemonFull, SimplePokemon } from './pokemonInterfaces';

export interface FadeInImageProps {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export interface PokemonCardProps {
    pokemon: SimplePokemon
}

export interface PokemonDetailsProps {
    pokemon: PokemonFull;
}
