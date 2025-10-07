package com.pokedex;


import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class PokemonAPIService {

    private final PokemonRepository repository;
    private final RestTemplate restTemplate = new RestTemplate();
    private static final String API_URL = "https://pokebuildapi.fr/api/v1/pokemon/limit/151";

    public PokemonAPIService(PokemonRepository repository) {
        this.repository = repository;
    }
    
    @SuppressWarnings("unchecked")
    public void fetchAndSavePokemons() {
        try {
            RestTemplate restTemplate = new RestTemplate();
            PokemonResponse[] response = restTemplate.getForObject(API_URL, PokemonResponse[].class);

            for(PokemonResponse poke : response) {
                Pokemon pokemon = new Pokemon();
                pokemon.setName(poke.getName());
                pokemon.setImage(poke.getImage());
                pokemon.setAttack(poke.getStats().getAttack());
                pokemon.setDefence(poke.getStats().getDefense());
                pokemon.setHP(poke.getStats().getHp());
                pokemon.setType1(String.valueOf(poke.getApiTypes().get(0)));

                List<Type> types = poke.getApiTypes();
                pokemon.setType1(types.get(0).getName());
                if (types.size() > 1) {
                    pokemon.setType2(types.get(1).getName());
                }

                repository.save(pokemon);
            }

            System.out.println("✅ Données Pokémon récupérées et enregistrées !");
        } catch (Exception e) {
            System.err.println("❌ Erreur lors de la récupération de l'API Pokémon : " + e.getMessage());
        }
    }
}