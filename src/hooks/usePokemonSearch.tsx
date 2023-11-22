import { useEffect, useState } from 'react';
import { pokemonAPI } from '../api';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces';

export const usePokemonSearch = () => {

    const [isFetching, setIsFetching] = useState(true);
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);

    const listUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1200';

    const loadPokemons = async () => {

        const resp = await pokemonAPI.get<PokemonPaginatedResponse>(listUrl);
        mapPokemonList(resp.data.results);

    };

    const mapPokemonList = (pokemonList: Result[]) => {

        const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {

            const urlPaths = url.split('/');
            const id = urlPaths[urlPaths.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

            return { id, picture, name };

        });

        setSimplePokemonList(newPokemonList);
        setIsFetching(false);

    };

    useEffect(() => {
        loadPokemons();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        isFetching,
        simplePokemonList,
    };

};
