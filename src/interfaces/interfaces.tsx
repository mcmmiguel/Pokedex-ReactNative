import { StyleProp, ImageStyle } from 'react-native';
import { SimplePokemon } from './pokemonInterfaces';

export interface FadeInImageProps {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export interface PokemonCardProps {
    pokemon: SimplePokemon
}
