package com.pokedex;


import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

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
            PokemonResponse response = restTemplate.getForObject(API_URL, PokemonResponse.class);

            if (response == null) return;

            Pokemon pokemon = null;
            for (PokemonResponse.PokemonResult p : response.getResults()) {
                System.out.println(pokemon);
                pokemon = new Pokemon();
                pokemon.setName((String) p.getName());
                pokemon.setType1(p.getTypes().get(0).get("name"));
                pokemon.setType2(p.getTypes().get(1).get("name"));
                pokemon.setAttack(p.getStats().get(2).get("attack"));
                pokemon.setDefence(p.getStats().get(3).get("defense"));
                pokemon.setHp(p.getStats().get(0).get("HP"));

            }

            repository.save(pokemon);
            System.out.println("✅ Données Pokémon récupérées et enregistrées !");
        } catch (Exception e) {
            System.err.println("❌ Erreur lors de la récupération de l'API Pokémon : " + e.getMessage());
        }
    }
}