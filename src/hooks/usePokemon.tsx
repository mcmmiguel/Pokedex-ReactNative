import { useEffect, useState } from 'react';
import { PokemonFull } from '../interfaces';
import { pokemonAPI } from '../api';

export const usePokemon = (id: string) => {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull);

    const loadPokemon = async () => {
        const resp = await pokemonAPI.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(resp.data);
        setIsLoading(false);
    };

    useEffect(() => {
        loadPokemon();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        isLoading,
        pokemon,
    };

};
